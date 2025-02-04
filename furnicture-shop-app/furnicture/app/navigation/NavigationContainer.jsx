import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from ".AppNavigator"

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator /> {/* Add the AppNavigator here */}
    </NavigationContainer>
  );
}
