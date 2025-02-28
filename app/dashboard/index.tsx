import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../dashboard/login'; // Adjust path as needed
import DashboardScreen from '../dashboard/dashboard'; // Adjust path as needed

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }} // Hide header for login screen
        />
        <Stack.Screen
          name="Dashboard"
          component={DashboardScreen} 
          options={{ headerShown: false }} // Hide header for dashboard
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
