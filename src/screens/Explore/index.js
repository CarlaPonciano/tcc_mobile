import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps'
import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from 'expo-location'
import { MaterialIcons } from '@expo/vector-icons'
import { styles } from './styles';
import api from '../../services/api';

export function Explore({ navigation }) {
  const [initialRegion, setInitialRegion] = useState({ latitude: 0, longitude: 0 })
  const [currentRegion, setCurrentRegion] = useState(null)
  const [campaigns, setCampaigns] = useState([])

  const loadCampaigns = async () =>  { 
    api.get(`campaigns`).then(response => {
      setCampaigns(response.data);
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

  function handleRegionChange(region) {
    setCurrentRegion(region)
  } 

  useEffect(() => {
    loadInitialPosition()
  }, [])

  useEffect(() => {
    loadCampaigns()
  }, [])

  return (
    <>
      <MapView
          onRegionChangeComplete={handleRegionChange}
          initialRegion={currentRegion}
          style={styles.map}
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

        {campaigns.map(campaign => (
          <Marker
            key={campaign.id}
            coordinate={{
                latitude: campaign.latitude,
                longitude: campaign.longitude
            }}
          >
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

          </Marker>
        ))}
      </MapView>
    </>
  );
}