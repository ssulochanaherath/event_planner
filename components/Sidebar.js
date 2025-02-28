import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { View, Text, StyleSheet } from 'react-native';

export default function Sidebar(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.header}>
        <Text style={styles.title}>My App</Text>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem 
        label="Logout" 
        onPress={() => props.navigation.replace('auth/login')} 
      />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
    backgroundColor: '#6200EE',
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
