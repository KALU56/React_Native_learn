import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Promotion from '../components/Promotion';

const products = [
  {
    id: '1',
    name: 'Modern Sofa',
    price: '$250',
    image: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '2',
    name: 'Classic Sofa',
    price: '$300',
    image: 'https://images.pexels.com/photos/276534/pexels-photo-276534.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

export default function HomeScreen({ navigation }) {
  const [favorites, setFavorites] = useState([]);

  const navigateToDetail = (product) => {
    navigation.navigate('SofaDetail', { selectedSofa: product });
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header onSearch={(query) => console.log('Searching for:', query)} />

      {/* Promotions */}
      <Promotion onAdPress={() => console.log('Ad clicked!')} />

      {/* Product List */}
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }} // Adds spacing below
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigateToDetail(item)} style={styles.productCard}>
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Footer */}
      <Footer setFavorites={setFavorites} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Fixes layout issues
    padding: 10,
    backgroundColor: '#fff',
  },
  productCard: {
    backgroundColor: '#f8f8f8',
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, // Adds shadow on Android
  },
  productImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  productPrice: {
    fontSize: 14,
    color: 'green',
    marginTop: 2,
  },
});

