import { createDrawerNavigator } from '@react-navigation/drawer';
import Sidebar from '../components/Sidebar'; 

import LoginScreen from './dashboard/login';
import DashboardScreen from './dashboard/dashboard';
import MovieScreen from './dashboard/movie';
import TicketBookingScreen from './dashboard/ticket';

const Drawer = createDrawerNavigator();

export default function RootLayout() {
  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      drawerContent={(props) => <Sidebar {...props} />}
    >
      <Drawer.Screen name="Login" component={LoginScreen} />
      <Drawer.Screen name="Dashboard" component={DashboardScreen} />
      <Drawer.Screen name="Movies" component={MovieScreen} />
      <Drawer.Screen name="Ticket Booking" component={TicketBookingScreen} />
    </Drawer.Navigator>
  );
}
