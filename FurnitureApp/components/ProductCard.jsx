import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProductCard({ item, toggleFavorite, favorites, setSelectedProduct, stockStatus }) {
  const isFavorite = favorites.includes(item.id);

  return (
    <TouchableOpacity style={styles.card} onPress={() => setSelectedProduct(item)}>
      {/* Favorite Button */}
      <TouchableOpacity onPress={() => toggleFavorite(item.id)} style={styles.favoriteButton}>
        <Ionicons name={isFavorite ? "heart" : "heart-outline"} size={22} color={isFavorite ? "red" : "gray"} />
      </TouchableOpacity>

      {/* Product Image */}
      <Image source={{ uri: item.image }} style={styles.productImage} />

      {/* Product Details */}
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
      <Text style={[styles.stockStatus, stockStatus[item.id] === "In Stock" ? styles.inStock : styles.outOfStock]}>
        {stockStatus[item.id] || "Unknown"}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    alignItems: 'center',
    width: 150,
    elevation: 3,
  },
  favoriteButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    padding: 5,
    zIndex: 10,
  },
  productImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginBottom: 8,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 14,
    color: 'green',
    fontWeight: '600',
  },
  stockStatus: {
    fontSize: 12,
    marginTop: 5,
    textAlign: 'center',
  },
  inStock: {
    color: 'green',
  },
  outOfStock: {
    color: 'red',
  },
});
