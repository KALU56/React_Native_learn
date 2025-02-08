
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import { CartProvider } from './context/CartContext';
import { FavoritesProvider } from './context/FavoritesContext'; 

export default function App() {
  return (
    <NavigationContainer>
      <CartProvider>
        <FavoritesProvider>
          <AppNavigator />
        </FavoritesProvider>
      </CartProvider>
    </NavigationContainer>
  );
}