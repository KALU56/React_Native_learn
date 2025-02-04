import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export default function Button({ title, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} className="bg-blue-500 p-3 rounded-lg">
      <Text className="text-white text-center">{title}</Text>
    </TouchableOpacity>
  );
}
