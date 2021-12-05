import React, { useEffect, useState, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import MapView, { Marker, Callout, Circle, PROVIDER_GOOGLE } from 'react-native-maps'
import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from 'expo-location'
import { MaterialIcons } from '@expo/vector-icons'
import { Modalize } from 'react-native-modalize'
const { height, width } = Dimensions.get('window')

import { styles } from './styles';
import api from '../../services/api';

export function Explore({ navigation }) {
  const [initialRegion, setInitialRegion] = useState({ latitude: 0, longitude: 0 })
  const [currentRegion, setCurrentRegion] = useState(null)
  const [campaigns, setCampaigns] = useState([])
  const [organizations, setOrganizations] = useState([])
  const [radius, setRadius] = useState(2000)
  const [radiusInput, setRadiusInput] = useState('2')
  const modalizeRef = useRef(null)

  const loadCampaigns = async () =>  { 
    api.get(`campaigns`).then(response => {
      setCampaigns(response.data);
    }); 
  }

  const loadOrganizations = async () =>  { 
    api.get(`organizations`).then(response => {
      setOrganizations(response.data);
    }); 
  }

  const loadInitialPosition = async () => {
    // For tests, the initial position will be Ouro Branco.
    // const { granted } = await requestForegroundPermissionsAsync();

    // if (granted) {
    //     const { coords } = await getCurrentPositionAsync({
    //         enableHighAccuracy: true,
    //     })

    //     const { latitude, longitude } = coords

    //     console.log(latitude, longitude)

    //     setCurrentRegion({
    //         latitude,
    //         longitude,
    //         latitudeDelta: 0.04,
    //         longitudeDelta: 0.04,
    //     })

    //     setInitialRegion({
    //       latitude,
    //       longitude,
    //       latitudeDelta: 0.04,
    //       longitudeDelta: 0.04,
    //     })
    // }
    setCurrentRegion({
        latitude: -20.5087236,
        longitude: -43.7117267,
        latitudeDelta: 0.04,
        longitudeDelta: 0.04,
    })

    setInitialRegion({
      latitude: -20.5087236,
      longitude: -43.7117267,
      latitudeDelta: 0.04,
      longitudeDelta: 0.04,
    })
  }

  const onOpenModalize = () => {
    modalizeRef.current?.open()
  }

  const increaseRadiusInput = () => {
    let valueToIncrease = ((Number.parseInt(radiusInput) + 1)).toString()
    setRadiusInput(valueToIncrease)
  }

  const decreaseRadiusInput = () => {
    let valueToDecrease = ((Number.parseInt(radiusInput)) -1).toString()
    if (Number.parseInt(radiusInput) > 0) {
      setRadiusInput(valueToDecrease)
    }
  }

  const changeRadius = () => {
    setRadius((Number.parseInt(radiusInput)) * 1000)
  }

  function handleRegionChange(region) {
    setCurrentRegion(region)
  } 

  useEffect(() => {
    loadInitialPosition()
  }, [])

  useEffect(() => {
    loadCampaigns()
  }, [])

  useEffect(() => {
    loadOrganizations()
  }, [])

  return (
    <>      
      <View style={styles.menu}>
        <Text style={styles.title}>Encontre campanhas{"\n"}próximas à você</Text>

        <View >
          <TouchableOpacity onPress={onOpenModalize} style={styles.filter}>
            <MaterialIcons name='filter-list' size={30} color='#116530' />
          </TouchableOpacity>
        </View>
      </View>
      <MapView
          provider={PROVIDER_GOOGLE}
          onRegionChangeComplete={handleRegionChange}
          initialRegion={currentRegion}
          style={styles.map}
          zoomControlEnabled={true}
      >
        <Marker
          title="Você está aqui!"
          coordinate={{
              latitude: initialRegion.latitude,
              longitude: initialRegion.longitude
          }}
        >
          <MaterialIcons name='my-location' size={30} color='#975516' />
        </Marker>
        <Circle
          center={{
            latitude: initialRegion.latitude,
            longitude: initialRegion.longitude
          }}
          radius={radius}
          strokeColor='#975516'
          fillColor='rgba(0,0,0,0.09)'
        />

        {campaigns.map(campaign => (
          <Marker
            key={campaign.id}
            coordinate={{
                latitude: campaign.latitude,
                longitude: campaign.longitude
            }}
          >

            {(() => {
              if (campaign.creator_organization_id != null) {
                let organization = organizations.find((organization) => organization.id === campaign.creator_organization_id)
                let organizationCampaigns = campaigns.filter((item) => item.creator_organization_id === campaign.creator_organization_id)
                return (
                  <>
                    <Image
                        style={styles.image}
                        source={{ uri: organization?.profile_picture }}
                    />
                    <Callout onPress={() => {
                      navigation.navigate('Organization', { organization: organization, organizationCampaigns: organizationCampaigns })
                    }}>
                      <View style={styles.callout}>
                          <Text style={styles.campaignTitle}>{organization?.name}</Text>
                          <Text style={styles.campaignDescription}>Essa é uma <Text style={styles.textBold}>organização</Text>. Descubra todas as campanhas organizadas por ela.</Text>
                          <MaterialIcons style={styles.campaignCTA} name='arrow-forward' size={25} color='#116530' />
                      </View>
                    </Callout>
                  </>
                )
              } else {
                return (
                  <>
                    <Image
                        style={styles.image}
                        source={{ uri: campaign.picture }}
                    />
                    <Callout onPress={() => {
                      navigation.navigate('Campaign', { campaign: campaign })
                    }}>
                      <View style={styles.callout}>
                          <Text style={styles.campaignTitle}>{campaign.name}</Text>
                          <Text style={styles.campaignDescription} numberOfLines={2}>{campaign.description}</Text>
                          <MaterialIcons style={styles.campaignCTA} name='arrow-forward' size={25} color='#116530' />
                      </View>
                    </Callout>
                  </>
                )
              }
            })()}

          </Marker>
        ))}
      </MapView>

      <Modalize 
        ref={modalizeRef}
        snapPoint={height/4}
        style={styles.modalFilter}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalOptionContainer}>
            <View>
              <Text style={styles.modalOptionTitle}>Raio <Text style={styles.titleDescriptionModal}>(em km)</Text></Text>
            </View>

            <View style={styles.modalButtonsContainer}>
              <TouchableOpacity style={styles.modalButton}>
                <Text style={styles.modalTextButton} onPress={decreaseRadiusInput}>-</Text>
              </TouchableOpacity>

              <View>
                <TextInput 
                  style={styles.searchInput} 
                  keyboardType={'numeric'}
                  value={radiusInput}
                  onChangeText={setRadiusInput}
                ></TextInput>
              </View>

              <TouchableOpacity style={styles.modalButton} onPress={increaseRadiusInput}>
                <Text style={styles.modalTextButton}>+</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.buttonSaveContainer}>
            <TouchableOpacity onPress={changeRadius} style={styles.saveButton}>
              <Text style={styles.textButton}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modalize>
    </>
  );
}