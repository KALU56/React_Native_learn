import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import productService from '../services/productService';

export default function AddProductScreen({ navigation }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  const handleAddProduct = () => {
    const newProduct = { name, description, price, image };
    productService.addProduct(newProduct).then(() => navigation.goBack());
  };

  return (
    <View className="p-4">
      <Text className="text-2xl font-bold mb-4">Add New Product</Text>
      <TextInput placeholder="Product Name" className="border p-2 mb-2" value={name} onChangeText={setName} />
      <TextInput placeholder="Description" className="border p-2 mb-2" value={description} onChangeText={setDescription} />
      <TextInput placeholder="Price" className="border p-2 mb-2" value={price} onChangeText={setPrice} keyboardType="numeric" />
      <TextInput placeholder="Image URL" className="border p-2 mb-2" value={image} onChangeText={setImage} />
      <Button title="Add Product" onPress={handleAddProduct} />
    </View>
  );
}