import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';

export default function Sidebar(props) {
  const navigation = useNavigation();

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.container}>
      {/* Header with Profile Image */}
      <View style={styles.header}>
        <Image
          source={{ uri: '../../assets/images/partial-react-logo.png' }} // Replace with actual profile image
          style={styles.profileImage}
        />
        <Text style={styles.title}>Welcome, User</Text>
      </View>

      {/* Navigation Items */}
      <View style={styles.menuContainer}>
        <DrawerItem
          label="Dashboard"
          onPress={() => navigation.navigate('Dashboard')}
          labelStyle={styles.label}
        />
        <DrawerItem
          label="Movies"
          onPress={() => navigation.navigate('Movies')}
          labelStyle={styles.label}
        />
        <DrawerItem
          label="Ticket Booking"
          onPress={() => navigation.navigate('Ticket Booking')}
          labelStyle={styles.label}
        />
        <DrawerItem
          label="Logout"
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [{ name: 'Login' }],
            })
          }
          labelStyle={[styles.label, { color: '#ff5c5c' }]} // Logout in red
        />
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e2d', // Dark theme background
  },
  header: {
    alignItems: 'center',
    paddingVertical: 30,
    backgroundColor: '#282843',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  title: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  menuContainer: {
    marginTop: 20,
  },
  label: {
    fontSize: 16,
    color: '#f1f1f1',
  },
});
