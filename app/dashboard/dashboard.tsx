import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack'; // Import StackNavigationProp

// Define the types for your stack navigation
type RootStackParamList = {
  Login: undefined;
  Dashboard: undefined;
  Movies: undefined; // Add Movies route
  'Ticket Booking': undefined; // Add Ticket Booking route
};

// Define the type for DashboardScreen navigation prop
type DashboardScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Dashboard'>;

type DashboardScreenProps = {
  navigation: DashboardScreenNavigationProp;
};

const DashboardScreen = ({ navigation }: DashboardScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>Welcome to the Dashboard</Text>
      <Button title="Go to Movies" onPress={() => navigation.navigate('Movies')} />
      <Button title="Go to Ticket Booking" onPress={() => navigation.navigate('Ticket Booking')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DashboardScreen;
