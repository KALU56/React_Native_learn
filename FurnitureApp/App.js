import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import { CartProvider } from './context/CartContext';
import { FavoritesProvider } from './context/FavoritesContext'; 
import { AuthProvider } from './context/AuthContext'; // Use AuthProvider here

export default function App() {
  return (
    <AuthProvider> {/* Wrap the app with AuthProvider */}
      <NavigationContainer>
        <CartProvider>
          <FavoritesProvider>
            <AppNavigator />
          </FavoritesProvider>
        </CartProvider>
      </NavigationContainer>
    </AuthProvider>
  );
}
