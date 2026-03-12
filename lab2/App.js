import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

import MainScreen from './src/mainScreen';
import DetailsScreen from './src/DetailsScreen';
import ContactsScreen from './src/ContactsScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerHeader}>
        <Image source={{ uri: 'https://media.istockphoto.com/id/1406022557/photo/a-confident-and-happy-young-man.webp?a=1&b=1&s=612x612&w=0&k=20&c=nyqT3HNBRoRbPDpTzCRQbSjmVbbYGSZ9VmZZzkkLTIU=' }} style={styles.avatar} />
        <Text style={styles.userName}>Литвиненко Микола</Text>
        <Text style={styles.userGroup}>Group: ВТ-24-1</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

function NewsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={MainScreen} options={{ title: 'Week News' }} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen 
          name="NewsHome" 
          component={NewsStack} 
          options={{ title: 'News', headerShown: false }}
        />
        <Drawer.Screen name="Contacts" component={ContactsScreen} options={{ title: 'Contacts' }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  drawerHeader: { padding: 20,  backgroundColor: '#FFA500', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#eee' },
  avatar: { width: 90, height: 90, borderRadius: 45, marginBottom: 10 },
  userName: { fontSize: 20, fontWeight: 'bold' },
  userGroup: { color: '#777', marginTop: 4 }
})