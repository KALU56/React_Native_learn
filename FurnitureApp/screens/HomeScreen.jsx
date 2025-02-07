// screens/HomeScreen.js
import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Promotion from '../components/Promotion';
import ProductCard from '../components/ProductCard';
import styles from './styles/HomeScreenStyles'; // Correct import path
import { products } from '../utils/constants';

export default function HomeScreen({ navigation }) {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (productId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(productId)
        ? prevFavorites.filter((id) => id !== productId)
        : [...prevFavorites, productId]
    );
  };

  const navigateToDetail = (product) => {
    navigation.navigate('SofaDetail', { selectedSofa: product });
  };

  const onClearFavorites = () => {
    setFavorites([]);
  };

  return (
    <View style={styles.container}>
      <Header onSearch={(query) => console.log('Searching for:', query)} onCartPress={() => navigation.navigate('Cart')} />
      <Promotion onAdPress={() => console.log('Ad clicked!')} />
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard
            item={item}
            toggleFavorite={toggleFavorite}
            isFavorite={favorites.includes(item.id)}
            onPress={() => navigateToDetail(item)}
          />
        )}
        numColumns={2} // Display products in 2 columns
      />
      <Footer onClearFavorites={onClearFavorites} />
    </View>
  );
}