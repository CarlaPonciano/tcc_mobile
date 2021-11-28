import React from 'react';
import { Text, View, Image, ScrollView, TouchableWithoutFeedback, StatusBar, FlatList } from 'react-native';
import { styles } from './styles';
import { formatDate } from '../../utils/formatDate';

export function Organization({ route , navigation}) {
  const organization = route.params.organization;
  const organizationCampaigns = route.params.organizationCampaigns;

  const renderItem = ({ item }) => (
    <>
      <View style={styles.card} key={item.id}>
        <View style={styles.cardInformation}>
          <Text style={styles.cardTitle}>{item.name}</Text>
          <Text style={styles.dateLimit}>Data Limite: {formatDate(item.end_date)}</Text>
          <TouchableWithoutFeedback 
            onPress={() => {
              navigation.navigate('Campaign', { campaign: item })
            }}
          >
            <Text style={styles.CTACampaign}>Saiba mais</Text>
          </TouchableWithoutFeedback>

        </View>
        <View style={styles.imageContainer}>
            <Image
              style={styles.cardImage}
              source={{uri:item.picture}}
            />
        </View>
      </View>
    </>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' backgroundColor='#975516'/>
      <ScrollView >
        <View style={styles.organizationInfo}>
          <Text style={styles.title}>{organization.name}</Text>
          <Image
            style={styles.organizationImage}
            source={{uri:organization.profile_picture}}
          />
          <Text style={styles.organizationDescription}>{organization.description}</Text>
          <Text style={styles.text}>Campanhas organizada por essa organização:</Text>
        </View>
        
      </ScrollView>
      <FlatList
        horizontal={true}
        data={organizationCampaigns}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}