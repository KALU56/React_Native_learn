
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function ProductCard({ item, toggleFavorite, favorites, setSelectedProduct, stockStatus }) {
  return (
    <View key={item.id} style={styles.card}>
      <TouchableOpacity onPress={() => toggleFavorite(item.id)} style={styles.favoriteButton}>
        <Text style={{ color: favorites.includes(item.id) ? 'red' : 'gray' }}>&#10084;</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setSelectedProduct(item)}>
        <Image source={{ uri: item.image }} style={styles.productImage} />
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>{item.price}</Text>
        <Text style={styles.stockStatus}>{stockStatus[item.id]}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
    margin: 5,
    flex: 1,
    alignItems: 'center',
    elevation: 3,
    position: 'relative',
  },
  favoriteButton: {
    position: 'absolute',
    top: 5,
    right: 5,
    padding: 5,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 5,
  },
  productPrice: {
    fontSize: 14,
    color: 'green',
  },
  stockStatus: {
    fontSize: 12,
    color: '#FF4500',
    marginTop: 5,
  },
});
