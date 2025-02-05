import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Explore from './explore';
import ProductDetail from './productDetail';
import AddProduct from './addProduct';

const Stack = createStackNavigator();

export default function AppLayout() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Explore">
        <Stack.Screen name="Explore" component={Explore} />
        <Stack.Screen name="Product Detail" component={ProductDetail} />
        <Stack.Screen name="Add Product" component={AddProduct} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
