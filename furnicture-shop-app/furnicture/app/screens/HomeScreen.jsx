import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import productService from '../services/ProductService';

import ProductCard from '../components/ui/ProductCard';

export default function HomeScreen({ navigation }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    productService.getProducts().then(data => setProducts(data));
  }, []);

  return (
    <View className="p-4">
      <Text className="text-2xl font-bold mb-4">Furniture Shop</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('ProductDetails', { product: item })}>
            <ProductCard product={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
