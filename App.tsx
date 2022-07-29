import {View, Text} from 'react-native';
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Routes from './src/routes';
import EventProvider from './src/contexts/EventContext';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <EventProvider>
        <Routes />
      </EventProvider>
    </NavigationContainer>
  );
};

export default App;
