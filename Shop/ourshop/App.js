import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import explore from './app/explore'
import productDBroductDetail from './app/productDetail';
import addProduct from './app/addProduct';

const Stack = createStackNavigator();

export default function AppLayout() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="explore">
        <Stack.Screen name="explore" component={explore} />
        <Stack.Screen name="product Detail" component={productDetail} />
        <Stack.Screen name="add Product" component={addProduct} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
