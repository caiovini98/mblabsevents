import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../pages/Home';
import MeusEventos from '../pages/MeusEventos';
import Evento from '../pages/Evento';

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="MeusEventos" component={MeusEventos} />
      <Stack.Screen
        name="Evento"
        component={Evento}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
