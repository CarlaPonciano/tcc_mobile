import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes.js';

export default function App() {
  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='#116530'/>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </>
  );
}