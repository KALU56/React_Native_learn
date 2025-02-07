import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SofaDetail({ route, navigation }) {
  const { selectedSofa } = route.params;
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };

  return (
    <View style={styles.detailContainer}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text>{'<'}</Text>
      </TouchableOpacity>

      {/* Favorite Button */}
      <TouchableOpacity onPress={toggleFavorite} style={styles.favoriteButton}>
        <Ionicons name={isFavorite ? "heart" : "heart-outline"} size={24} color={isFavorite ? "red" : "gray"} />
      </TouchableOpacity>

      {/* Product Image */}
      <Image source={{ uri: selectedSofa.image }} style={styles.detailImage} />

      {/* Product Details */}
      <Text style={styles.title}>{selectedSofa.name}</Text>
      <Text style={styles.price}>{selectedSofa.price}</Text>
      <Text style={styles.description}>Minimalist and stylish, perfect for any home.</Text>

      {/* Buy Now Button */}
      <TouchableOpacity style={styles.buyButton}>
        <Text style={styles.buyText}>Buy Now</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  detailContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
  },
  favoriteButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    padding: 10,
  },
  detailImage: {
    width: 250,
    height: 250,
    borderRadius: 10,
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  price: {
    fontSize: 16,
    color: 'green',
    marginTop: 5,
  },
  description: {
    fontSize: 14,
    padding: 10,
    textAlign: 'center',
    marginTop: 10,
  },
  buyButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buyText: {
    color: 'white',
    fontWeight: 'bold',
  },
});