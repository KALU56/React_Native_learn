import React from 'react';
import { View, Text, Button } from 'react-native';

export default function AdminScreen({ navigation }) {
  return (
    <View className="p-4">
      <Text className="text-2xl font-bold mb-4">Admin Dashboard</Text>
      <Button title="Add New Product" onPress={() => navigation.navigate('AddProduct')} />
    </View>
  );
}
