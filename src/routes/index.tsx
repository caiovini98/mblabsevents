import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import StackRoutes from './stackRoutes';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MeusEventos from '../pages/MeusEventos';

const Drawer = createDrawerNavigator();

export default function Routes() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#090A0E',
          paddingTop: 20,
        },
        drawerActiveBackgroundColor: '#E72F49',
        drawerActiveTintColor: '#FFF',
        drawerInactiveTintColor: '#FFF',
      }}>
      <Drawer.Screen
        name="HomeStack"
        component={StackRoutes}
        options={{
          title: 'Início',
          drawerIcon: ({size, color}) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="MeusEventos"
        component={MeusEventos}
        options={{
          title: 'Meus Eventos',
          drawerIcon: ({size, color}) => (
            <Icon name={'event'} size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
