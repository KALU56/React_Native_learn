import React from 'react';
import { View, Text, Image } from 'react-native';

export default function ProductDetailScreen({ route }) {
  const { product } = route.params;

  return (
    <View className="p-4">
      <Image source={{ uri: product.image }} className="w-full h-60 rounded-xl mb-4" />
      <Text className="text-2xl font-bold mb-2">{product.name}</Text>
      <Text className="text-lg text-gray-600 mb-2">{product.description}</Text>
      <Text className="text-xl text-green-600 font-semibold">${product.price}</Text>
    </View>
  );
}
