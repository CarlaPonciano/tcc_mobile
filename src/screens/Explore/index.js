import React, { useEffect, useState, useRef } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import MapView, { Marker, Callout, Circle } from 'react-native-maps'
import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from 'expo-location'
import { MaterialIcons } from '@expo/vector-icons'
import { Modalize } from 'react-native-modalize';

import { styles } from './styles';
import api from '../../services/api';

export function Explore({ navigation }) {
  const [initialRegion, setInitialRegion] = useState({ latitude: 0, longitude: 0 })
  const [currentRegion, setCurrentRegion] = useState(null)
  const [campaigns, setCampaigns] = useState([])
  const [organizations, setOrganizations] = useState([])
  const [radius, setRadius] = useState(2000)
  const modalizeRef = useRef()

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
    const { granted } = await requestForegroundPermissionsAsync();

    if (granted) {
        const { coords } = await getCurrentPositionAsync({
            enableHighAccuracy: true,
        })

        const { latitude, longitude } = coords

        setCurrentRegion({
            latitude,
            longitude,
            latitudeDelta: 0.04,
            longitudeDelta: 0.04,
        })

        setInitialRegion({
          latitude,
          longitude,
          latitudeDelta: 0.04,
          longitudeDelta: 0.04,
        })
    }
  }

  const onOpenModal = () => {
    modalizeRef.current?.open();
  };

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
      <Modalize
        ref={modalizeRef}
        snapPoint={180}
      >
        <View>
          <Text>Text</Text>
        </View>
      </Modalize>
      
      <View style={styles.filter}>
        <TouchableOpacity 
        onPress={onOpenModal}
        >
          <MaterialIcons style={styles.campaignCTA} name='filter-list' size={30} color='#000' />
        </TouchableOpacity>
      </View>
      <MapView
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
                let campaignOrganization = organizations.find((organization) => organization.id === campaign.creator_organization_id)
                return (
                  <>
                    <Image
                        style={styles.image}
                        source={{ uri: campaignOrganization?.profile_picture }}
                    />
                    <Callout>
                      <View style={styles.callout}>
                          <Text style={styles.campaignTitle}>{campaignOrganization?.name}</Text>
                          <Text style={styles.campaignDescription}>Essa é uma <Text style={styles.textBold}>organização</Text>, encontre no menu abaixo todas as campanhas disponíveis.</Text>
                          <MaterialIcons style={styles.campaignCTA} name='arrow-downward' size={25} color='#61D27A' />
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
                          <MaterialIcons style={styles.campaignCTA} name='arrow-forward' size={25} color='#61D27A' />
                      </View>
                    </Callout>
                  </>
                )
              }
            })()}

          </Marker>
        ))}
      </MapView>
    </>
  );
}