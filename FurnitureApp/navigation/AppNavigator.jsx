import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import SofaDetail from '../screens/SofaDetail';
import Cart from '../screens/Cart';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* HomeScreen with no header title and no extra space */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: '', // Remove the "Home" text
            headerStyle: {
              elevation: 0, // Remove shadow on Android
              shadowOpacity: 0, // Remove shadow on iOS
              height: 50, // Adjust header height if needed
            },
          }}
        />
        <Stack.Screen name="SofaDetail" component={SofaDetail} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}