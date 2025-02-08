import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import Profile from '../screens/Profile';
import Favorites from '../screens/Favorites';
import Cart from '../screens/Cart';
import SofaDetail from '../screens/SofaDetail'; 
import Header from '../components/Header';
import { FavoritesProvider } from '../context/FavoritesContext';
import { CartProvider } from '../context/CartContext';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Favorites" component={Favorites} />
      <Stack.Screen name="SofaDetail" component={SofaDetail} />
    </Stack.Navigator>
  );
}

// AppNavigator combines Drawer and Stack navigation
export default function AppNavigator() {
  return (
    <FavoritesProvider>
      <CartProvider>
        <Drawer.Navigator initialRouteName="Home" screenOptions={{ header: () => <Header /> }}>
          <Drawer.Screen name="Home" component={HomeStack} />
          <Drawer.Screen name="Profile" component={Profile} />
          <Drawer.Screen name="Favorites" component={Favorites} />
          <Drawer.Screen name="Cart" component={Cart} />
        </Drawer.Navigator>
      </CartProvider>
    </FavoritesProvider>
  );
}
