
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import SofaDetail from '../screens/SofaDetail';
import Favorites from '../screens/Favorites'; 
const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="SofaDetail" component={SofaDetail} />
      <Stack.Screen name="Favorites" component={Favorites} />
    </Stack.Navigator>
  );
}