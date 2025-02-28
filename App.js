import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen from '../event_planner/app/dashboard/index';
import DashboardScreen from '../event_planner/app/dashboard/dashboard';
import MovieScreen from '../event_planner/app/dashboard/movie';
import TicketBookingScreen from '../event_planner/app/dashboard/ticket';
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
          options={{ headerShown: false }} 
        />

        {/* Dashboard Drawer after Login */}
        <Stack.Screen
          name="Dashboard"
          component={DashboardDrawer}
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


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
