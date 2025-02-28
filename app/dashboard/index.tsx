import React from 'react';
import { View, Text, Button } from 'react-native';

export default function DashboardScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to the Dashboard</Text>
      <Button title="Go to Movies" onPress={() => navigation.navigate('Movies')} />
      <Button title="Go to Ticket Booking" onPress={() => navigation.navigate('Ticket Booking')} />
    </View>
  );
}
