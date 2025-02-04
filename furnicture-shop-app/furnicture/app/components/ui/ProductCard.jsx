import React from 'react';
import { View, Text, Image } from 'react-native';

export default function ProductCard({ product }) {
  return (
    <View className="border rounded-xl p-4 mb-4 shadow-sm bg-white">
      <Image source={{ uri: product.image }} className="w-full h-40 rounded-lg mb-2" />
      <Text className="text-xl font-semibold">{product.name}</Text>
      <Text className="text-gray-600">${product.price}</Text>
    </View>
  );
}
