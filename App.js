import { StatusBar } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

import Routes from './src/routes.js';

export default function App() {
  return (
    <>
      <StatusBar barStyle='dark-content' backgroundColor='#61D27A'/>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </>
  );
}