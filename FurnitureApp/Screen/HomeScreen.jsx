
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Promotion from '../components/Promotion';

const products = [
  { id: '1', name: 'Royal Palm Sofa', price: '$50.18', image: 'https://images.pexels.com/photos/1090092/pexels-photo-1090092.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: '2', name: 'Leatherette Sofa', price: '$30.99', image: 'https://images.pexels.com/photos/2343465/pexels-photo-2343465.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: '3', name: 'Modern Sofa', price: '$45.00', image: 'https://images.pexels.com/photos/6758238/pexels-photo-6758238.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: '4', name: 'Classic Sofa', price: '$55.00', image: 'https://images.pexels.com/photos/30491861/pexels-photo-30491861/free-photo-of-elegant-vintage-dining-room-with-chandeliers.jpeg?auto=compress&cs=tinysrgb&w=600' },
];

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    console.log('Searching for:', query);
  };

  const handleAdPress = () => {
    console.log('Ad clicked');
  };

  const handleProductPress = (product) => {
    console.log('Product clicked:', product.name);
  };

  return (
    <SafeAreaView style={styles.container}>
  
      <Header onSearch={handleSearch} />

    
      <Promotion onAdPress={handleAdPress} />

      <Text style={styles.sectionTitle}>Featured Products</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.productList}>
          {products.map((product) => (
            <TouchableOpacity key={product.id} onPress={() => handleProductPress(product)} style={styles.productCard}>
              <Image source={{ uri: product.image }} style={styles.productImage} />
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productPrice}>{product.price}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productCard: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    width: '48%', // 2 items per row
    elevation: 3,
    alignItems: 'center',
  },
  productImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 14,
    color: 'green',
    textAlign: 'center',
  },
});
