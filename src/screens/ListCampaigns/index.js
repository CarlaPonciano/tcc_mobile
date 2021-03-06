import React, { useState, useEffect } from 'react';
import { Text, View, Image, FlatList, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { styles } from './styles';
import { formatDate } from '../../utils/formatDate';
const { width } = Dimensions.get('window');

import api from '../../services/api';
import Campaign from '../Campaign';

export function ListCampaigns({ navigation }) {
  const [campaigns, setCampaigns] = useState([]);
  const [campaignsAmount, setCampaignsAmount] = useState([]);

  const loadCampaigns = async () =>  { 
    api.get(`campaigns`).then(response => {
      setCampaigns(response.data);
    }); 
  }

  const loadCampaignAmount = async () =>  { 
    api.get(`campaigns/count`).then(response => {
      setCampaignsAmount(response.data);
    }); 
  }

  useEffect(() => {
    loadCampaigns()
  }, [])

  useEffect(() => {
    loadCampaignAmount()
  }, [])

  const renderItem = ({ item }) => (
    <>
      <TouchableWithoutFeedback onPress={() => {
        navigation.navigate('Campaign', { campaign: item })
      }}>
        <View style={styles.campaingInfo} key={item.id}>
          <Text style={styles.campaignTitle}>{item.name}</Text>
          <Text style={styles.campaignDescription} numberOfLines={3}>{item.description}</Text>
          <Image
            style={styles.campaignImage}
            source={{uri:item.picture}}
          />
          <Text style={styles.dateLimit}>Data Limite:  
            <Text style={styles.dateLimitBold}> {formatDate(item.end_date)}</Text>
          </Text>
          <View style={styles.divider}></View>
          <View style={styles.moneyInformation}>
              <View style={styles.moneyGoal}>
                <Text style={styles.amountRaisedTitle}>Objetivo</Text>
                <Text style={styles.amountRaised}>R$ {item.goal}</Text>
              </View>
              <View style={styles.moneyRaised}>
                <Text style={styles.amountRaisedTitle}>Total Arrecadado</Text>
                <Text style={styles.amountRaised}>R$ {item.amount_raised}</Text>
              </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Encontre campanhas para realizar doa????es</Text>
      <Text style={styles.campaignAmount}>{campaignsAmount} campanhas encontradas</Text>

      <FlatList
        data={campaigns}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        snapToOffsets={[...Array(campaigns.length)].map((item, index) => {
          return index * width * 0.90
        })}
        horizontal
        snapToAlignment={'start'}
        scrollEventThrottle={16}
        decelerationRate="fast"
        renderItem={renderItem}
      />
    </View>
  );
}