import React, { useContext } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import Profile from '../screens/Profile';
import Favorites from '../screens/Favorites';
import Cart from '../screens/Cart';
import SofaDetail from '../screens/SofaDetail';
import LoginScreen from '../screens/LoginScreen';
import Header from '../components/Header';
import { AuthContext } from '../context/AuthContext';

// Create navigators
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

// Stack for authenticated users
function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="SofaDetail" component={SofaDetail} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Favorites" component={Favorites} />
    </Stack.Navigator>
  );
}

// Drawer Navigator for authenticated users
function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home" screenOptions={{ header: () => <Header /> }}>
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Favorites" component={Favorites} />
      <Drawer.Screen name="Cart" component={Cart} />
    </Drawer.Navigator>
  );
}

// Stack for authentication (Login)
function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}

// Main App Navigation with authentication handling
export default function AppNavigator() {
  const { isAuthenticated } = useContext(AuthContext); // Use context here

  return isAuthenticated ? <DrawerNavigator /> : <AuthStack />;
}
