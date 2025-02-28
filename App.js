import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import MovieScreen from './screens/MovieScreen';
import TicketBookingScreen from './screens/TicketBookingScreen';
import Sidebar from './components/Sidebar';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* Login Screen */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }} // Hide header for login screen
        />

        {/* Dashboard Drawer after Login */}
        <Stack.Screen
          name="Dashboard"
          component={DashboardDrawer}
          options={{ headerShown: false }} // Hide header for dashboard
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Drawer Navigator for Dashboard and Sidebar
function DashboardDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      drawerContent={(props) => <Sidebar {...props} />}
    >
      <Drawer.Screen name="Dashboard" component={DashboardScreen} />
      <Drawer.Screen name="Movies" component={MovieScreen} />
      <Drawer.Screen name="Ticket Booking" component={TicketBookingScreen} />
    </Drawer.Navigator>
  );
}

export default App;
