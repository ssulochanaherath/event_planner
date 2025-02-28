import React from 'react';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Sidebar(props) {
  const navigation = useNavigation();

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.header}>
        <Text style={styles.title}>My App</Text>
      </View>

      <DrawerItem label="Dashboard" onPress={() => navigation.navigate('Dashboard')} />
      <DrawerItem label="Movies" onPress={() => navigation.navigate('Movies')} />
      <DrawerItem label="Ticket Booking" onPress={() => navigation.navigate('Ticket Booking')} />
      <DrawerItem label="Logout" onPress={() => navigation.replace('Login')} />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
    backgroundColor: '#6200EE',
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
