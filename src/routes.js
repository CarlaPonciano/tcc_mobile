import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialIcons } from '@expo/vector-icons';

import { ListCampaigns } from './screens/ListCampaigns';
import { Explore } from './screens/Explore';
import { Campaign } from './screens/Campaign';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

function Routes () {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#975516'
        },
        headerTintColor: '#fff',
      }}
    >
      <Stack.Screen
        name="TabScreen"
        component={TabScreen}
        options={{
          headerShown: false,
          title:'Campanhas',
          headerTitleStyle: {
          textAlign: 'center',
        }}}
      />
      <Stack.Screen
        name="Explore"
        component={Explore}
        options={{
          title:'Explorar',
          headerTitleStyle: {
            textAlign: 'center',
          },
          
        }}
      />
      <Stack.Screen 
        name="Campaign" 
        component={Campaign} 
        options={{
          title:'Detalhes da Campanha',
          headerTitleStyle: {
            textAlign: 'center',
          },
        }} 
      />
    </Stack.Navigator>
  )
}

export default Routes

const TabScreen = ({ navigation }) => (
  <Tab.Navigator initialRouteName="ListCampaigns"
    activeColor="#fff"
    barStyle={{ backgroundColor: '#61D27A' }}
  >
    <Tab.Screen 
      name="ListCampaigns" 
      component={ListCampaigns} 
      options={{
        tabBarLabel: 'Campanhas',
        tabBarIcon: ({ color }) => (
          <MaterialIcons name="home" size={25} color={color} />
        ),
      }}
    />
    <Tab.Screen 
      name="Explorar" 
      component={Explore} 
      options={{
        tabBarLabel: 'Explorar',
        tabBarIcon: ({ color }) => (
          <MaterialIcons name="place" size={25} color={color} />
        ),
      }} 
    />
  </Tab.Navigator>
);