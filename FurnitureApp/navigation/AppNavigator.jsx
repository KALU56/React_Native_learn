import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import SofaDetail from '../screens/SofaDetail';
import Cart from '../screens/Cart';
import Favorites from '../screens/Favorites'; // Import Favorites
import Category from '../screens/Category'; // Import Category
import Profile from '../screens/Profile'; // Import Profile

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SofaDetail" component={SofaDetail} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Favorites" component={Favorites} />
        <Stack.Screen name="Category" component={Category} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}