// app/dashboard/index.tsx
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function DashboardScreen() {
  return (
    <View>
      <Text>Welcome to the Dashboard</Text>
      <Button title="Go to Movie" onPress={() => {}} />
      <Button title="Go to Ticket Booking" onPress={() => {}} />
    </View>
  );
}
