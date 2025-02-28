// app/_layout.tsx
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View, Text } from 'react-native';
import { useRouter } from 'expo-router';

import DashboardScreen from './dashboard/index';
import MovieScreen from './dashboard/movie';
import TicketBookingScreen from './dashboard/ticket';

const Drawer = createDrawerNavigator();

function Sidebar() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Dashboard" component={DashboardScreen} />
      <Drawer.Screen name="Movie" component={MovieScreen} />
      <Drawer.Screen name="Ticket Booking" component={TicketBookingScreen} />
    </Drawer.Navigator>
  );
}

export default function RootLayout() {
  return (
    <NavigationContainer>
      <Sidebar />
    </NavigationContainer>
  );
}
