import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SofaDetail({ route, navigation }) {
  const { selectedSofa } = route.params;
  const [isFavorite, setIsFavorite] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.detailContainer}>
        {/* Back Button */}
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>

        {/* Favorite Button */}
        <TouchableOpacity onPress={toggleFavorite} style={styles.favoriteButton}>
          <Ionicons name={isFavorite ? "heart" : "heart-outline"} size={24} color={isFavorite ? "red" : "gray"} />
        </TouchableOpacity>

        {/* Product Image */}
        <Image source={{ uri: selectedSofa.image }} style={styles.detailImage} />

        {/* Color Selector */}
        <View style={styles.colorSelector}>
          <View style={[styles.colorOption, { backgroundColor: '#2D5F68' }]} />
          <View style={[styles.colorOption, { backgroundColor: '#D9C7B5' }]} />
          <View style={[styles.colorOption, { backgroundColor: '#F5E7C5' }]} />
        </View>

        {/* Product Details */}
        <Text style={styles.title}>{selectedSofa.name}</Text>
        <Text style={styles.price}>${selectedSofa.price}</Text>
        <View style={styles.ratingContainer}>
          <Ionicons name="star" size={16} color="#FFD700" />
          <Text style={styles.ratingText}>4.5 (500 Reviews)</Text>
        </View>

        {/* Product Description */}
        <Text style={styles.description}>
          Minimal Sofa is made of natural wood. The design is very simple and minimal. This is one of the best pieces of furniture for any family. With 3 different colors, you can easily select the best match for your home.
        </Text>

        {/* Quantity Selector */}
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={decreaseQuantity} style={styles.quantityButton}>
            <Text style={styles.quantityText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{quantity}</Text>
          <TouchableOpacity onPress={increaseQuantity} style={styles.quantityButton}>
            <Text style={styles.quantityText}>+</Text>
          </TouchableOpacity>
        </View>

        {/* Buy Now Button */}
        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buyText}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  detailContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 20,
  },
  favoriteButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    padding: 10,
  },
  detailImage: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginTop: 60,
  },
  colorSelector: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  colorOption: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  price: {
    fontSize: 20,
    color: 'green',
    marginTop: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  ratingText: {
    fontSize: 16,
    marginLeft: 5,
    color: '#888',
  },
  description: {
    fontSize: 16,
    marginTop: 20,
    color: '#555',
    lineHeight: 24,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  quantityButton: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
  },
  quantityText: {
    fontSize: 18,
    marginHorizontal: 20,
  },
  buyButton: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 10,
    marginTop: 30,
    alignItems: 'center',
  },
  buyText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
