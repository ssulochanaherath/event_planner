import { createDrawerNavigator } from '@react-navigation/drawer';
import Sidebar from '../components/Sidebar'; // Ensure correct path

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
      <Drawer.Screen name="Dashboard" component={DashboardScreen} />
      <Drawer.Screen name="Movies" component={MovieScreen} />
      <Drawer.Screen name="Ticket Booking" component={TicketBookingScreen} />
    </Drawer.Navigator>
  );
}
