import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator'; // Your navigator
import { CartProvider } from './context/CartContext'; // Ensure correct path to CartContext

export default function App() {
  return (
    <NavigationContainer>
      <CartProvider>
        <AppNavigator />
      </CartProvider>
    </NavigationContainer>
  );
}
