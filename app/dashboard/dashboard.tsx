import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

// Define types for navigation
type RootStackParamList = {
  Login: undefined;
  Dashboard: undefined;
  Movies: undefined;
  'Ticket Booking': undefined;
};

type DashboardScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Dashboard'>;

type DashboardScreenProps = {
  navigation: DashboardScreenNavigationProp;
};

const DashboardScreen = ({ navigation }: DashboardScreenProps) => {
  return (
    <View style={styles.container}>
      {/* Welcome Message */}
      <Text style={styles.title}>🎬 Welcome to the Dashboard</Text>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Movies')}>
          <Text style={styles.buttonText}>🎥 Available Movies</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Ticket Booking')}>
          <Text style={styles.buttonText}>🎟 Book Tickets</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1e1e2d',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
  },
  buttonContainer: {
    width: '100%',
  },
  button: {
    backgroundColor: '#ff5c5c', 
    paddingVertical: 15,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    width: '100%',
    shadowColor: '#ff5c5c',
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default DashboardScreen;
