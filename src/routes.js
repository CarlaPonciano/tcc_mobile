import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialIcons } from '@expo/vector-icons'

import { Campaign } from './screens/Campaign';
import { Explore } from './screens/Explore';

const Tab = createMaterialBottomTabNavigator();

function Routes () {
  return (
    <Tab.Navigator
      initialRouteName="Campanhas"
      activeColor="#fff"
      barStyle={{ backgroundColor: '#61D27A' }}
    >
      <Tab.Screen
        name="Campaign"
        component={Campaign}
        options={{
          tabBarLabel: 'Campanhas',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarLabel: 'Explorar',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
    // <Stack.Navigator   
    //   initialRouteName="Campaign"
    //   activeColor="#fff"
    //   inactiveColor="#000"
    //   labelStyle={{ fontSize: 12 }}
    //   barStyle={{ backgroundColor: '#61D27A' }}
    // >

    //   <Stack.Screen 
    //     name="Campanhas"
    //     component={ HomeStackScreen }
    //     options={{
    //       name: 'Campanhas',
    //       tabBarIcon: ({ color }) => (
    //         <MaterialIcons name="home" size={25} color={color} />
    //       )
    //     }}
    //   />

    //   <Stack.Screen 
    //     name="Explorar" 
    //     component={ ExploreStackScreen }
    //     options={{
    //       tabBarLabel: 'Explorar',
    //       tabBarIcon: ({ color }) => (
    //         <MaterialIcons name="place" size={25} color={color} />
    //       ),
    //     }} 
    //   />
      
    // </Stack.Navigator>
  )
}

export default Routes

// const HomeStackScreen = ({navigation}) => (
//   <HomeStack.Navigator screenOptions={{
//           headerStyle: {
//             backgroundColor: '#61D27A'
//           },
//           headerTintColor: '#000',
//       }}>
//       <HomeStack.Screen 
//         name="Campaign" 
//         component={Campaign} 
//         options={{
//           title:'Campanhas',
//           headerTitleStyle: {
//             textAlign: 'center',
//         },
//       }} />
//       {/* <HomeStack.Screen 
//         name="Explorar" 
//         component={Explore} 
//         options={{
//           title:'Explorar',
//           headerTitleStyle: {
//           textAlign: 'center',
//         },
//       }} /> */}
//   </HomeStack.Navigator>
// );

// const ExploreStackScreen = ({navigation}) => (
//   <HomeStack.Navigator screenOptions={{
//           headerStyle: {
//             backgroundColor: '#61D27A'
//           },
//           headerTintColor: '#000',
//       }}>
//       <HomeStack.Screen 
//         name="Explorar" 
//         component={Explore} 
//         options={{
//           title:'Explorar',
//           headerTitleStyle: {
//           textAlign: 'center',
//         },
//       }} />
//   </HomeStack.Navigator>
// );