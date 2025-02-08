import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProductCard({ item, toggleFavorite, isFavorite, onPress }) {

  const priceValue = parseFloat(item.price.replace('$', '').replace(',', ''));


  const formattedPrice = `$${priceValue.toFixed(2)}`;

  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      

      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.price}>{formattedPrice}</Text> 
      <TouchableOpacity onPress={() => toggleFavorite(item.id)} style={styles.favoriteButton}>
        <Ionicons name={isFavorite ? "heart" : "heart-outline"} size={24} color={isFavorite ? "red" : "gray"} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 5,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  price: {
    fontSize: 14,
    color: 'green',
    marginTop: 5,
  },
  favoriteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});
