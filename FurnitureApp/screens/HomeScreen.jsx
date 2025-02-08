
import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Promotion from '../components/Promotion';
import ProductCard from '../components/ProductCard';
import styles from './styles/HomeScreenStyles';
import { products } from '../utils/constants';
import { useFavorites } from '../context/FavoritesContext';

export default function HomeScreen({ navigation }) {
  const { favorites, toggleFavorite } = useFavorites();

  const navigateToDetail = (product) => {
    navigation.navigate('SofaDetail', { selectedSofa: product });
  };

  const onClearFavorites = () => {
    setFavorites([]);
  };

  const onHomePress = () => {
    navigation.navigate('Home');
  };

  const onFavoritePress = () => {
    navigation.navigate('Favorites');
  };

  const onCategoryPress = () => {
    navigation.navigate('Category');
  };

  const onProfilePress = () => {
    navigation.navigate('Profile');
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
            toggleFavorite={() => toggleFavorite(item)}
            isFavorite={favorites.some((fav) => fav.id === item.id)}
            onPress={() => navigateToDetail(item)}
          />
        )}
        numColumns={2}
      />
      <Footer
        onClearFavorites={onClearFavorites}
        onHomePress={onHomePress}
        onFavoritePress={onFavoritePress}
        onCategoryPress={onCategoryPress}
        onProfilePress={onProfilePress}
      />
    </View>
  );
}