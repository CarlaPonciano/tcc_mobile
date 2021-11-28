import React from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { styles } from './styles';
import { formatDate } from '../../utils/formatDate';

export function Campaign({ route , navigation}) {
  const campaign = route.params.campaign;
  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' backgroundColor='#975516'/>
      <ScrollView>
        <View style={styles.campaignInfo}>
          <Text style={styles.title}>{campaign.name}</Text>
          <Image
            style={styles.campaignImage}
            source={{uri:campaign.picture}}
          />
          <Text style={styles.campaignDescription}>{campaign.description}</Text>
          <Text style={styles.dateLimit}>Data Limite:  
            <Text style={styles.dateLimitBold}> {formatDate(campaign.end_date)}</Text>
          </Text>
          <Text style={styles.moneyGoalTitle}>Objetivo:
            <Text style={styles.moneyGoal}> R$ {campaign.goal}</Text>
          </Text>
          <Text style={styles.amountRaisedTitle}>Total Arrecadado:
            <Text style={styles.amountRaised}> R$ {campaign.amount_raised}</Text>
          </Text>

          <TouchableOpacity>
            <View style={styles.buttonMakeDonation}>
              <Text style={styles.textButton}>Realizar Doação</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}