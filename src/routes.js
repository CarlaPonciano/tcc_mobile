import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialIcons } from '@expo/vector-icons'

import { Campaign } from './screens/Campaign';
import { Explore } from './screens/Explore';

const Stack = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();

function Routes () {
  return (
    <Stack.Navigator   
      initialRouteName="Campaign"
      activeColor="#fff"
      inactiveColor="#000"
      labelStyle={{ fontSize: 12 }}
      barStyle={{ backgroundColor: '#61D27A' }}
    >

      <Stack.Screen 
        name="Campanhas"
        component={ HomeStackScreen }
        options={{
          name: 'Campanha',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" size={25} color={color} />
          )
        }}
      />

      <Stack.Screen 
        name="Explorar" 
        component={ ExploreStackScreen }
        options={{
          tabBarLabel: 'Explorar',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="place" size={25} color={color} />
          ),
        }} 
      />
      
    </Stack.Navigator>
  )
}

export default Routes

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: '#61D27A'
          },
          headerTintColor: '#000',
      }}>
      <HomeStack.Screen 
        name="Campaign" 
        component={Campaign} 
        options={{
          title:'Campanha',
          headerTitleStyle: {
          textAlign: 'center',
        },
      }} />
      <HomeStack.Screen 
        name="Explorar" 
        component={Explore} 
        options={{
          title:'Pesquisar',
          headerTitleStyle: {
          textAlign: 'center',
        },
      }} />
  </HomeStack.Navigator>
);

const ExploreStackScreen = ({navigation}) => (
  <HomeStack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: '#61D27A'
          },
          headerTintColor: '#000',
      }}>
      <HomeStack.Screen 
        name="Explorar" 
        component={Explore} 
        options={{
          title:'Pesquisar',
          headerTitleStyle: {
          textAlign: 'center',
        },
      }} />
  </HomeStack.Navigator>
);