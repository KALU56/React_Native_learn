import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useCart } from '../context/CartContext';
import styles from './styles/SofaDetailStyles'; // Import styles from the new file

export default function SofaDetail({ route, navigation }) {
  const { selectedSofa } = route.params;
  const { addToCart, removeFromCart } = useCart();
  const [isFavorite, setIsFavorite] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [rating, setRating] = useState(0);

  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev);
    navigation.navigate('Favorites');
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
    addToCart(1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
      removeFromCart(1);
    }
  };

  const handleRating = (rate) => {
    setRating(rate);
  };

  const renderStars = () => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <TouchableOpacity key={i} onPress={() => handleRating(i)}>
          <Ionicons
            name={i <= rating ? 'star' : 'star-outline'}
            size={24}
            color="#FFD700"
          />
        </TouchableOpacity>
      );
    }
    return stars;
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
      <View style={styles.detailContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity onPress={toggleFavorite} style={styles.favoriteButton}>
          <Ionicons name={isFavorite ? "heart" : "heart-outline"} size={24} color={isFavorite ? "red" : "gray"} />
        </TouchableOpacity>

        <Image source={{ uri: selectedSofa.image }} style={styles.detailImage} />

        <View style={styles.colorSelector}>
          <View style={[styles.colorOption, { backgroundColor: '#2D5F68' }]} />
          <View style={[styles.colorOption, { backgroundColor: '#D9C7B5' }]} />
          <View style={[styles.colorOption, { backgroundColor: '#F5E7C5' }]} />
        </View>

        <Text style={styles.title}>{selectedSofa.name}</Text>
        <Text style={styles.price}>${selectedSofa.price}</Text>
        <View style={styles.ratingContainer}>
          {renderStars()}
          <Text style={styles.ratingText}>{rating} / 5</Text>
        </View>

        <Text style={styles.description}>
          Minimal Sofa is made of natural wood. The design is very simple and minimal. This is one of the best pieces of furniture for any family. With 3 different colors, you can easily select the best match for your home.
        </Text>

        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={decreaseQuantity} style={styles.quantityButton}>
            <Text style={styles.quantityText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{quantity}</Text>
          <TouchableOpacity onPress={increaseQuantity} style={styles.quantityButton}>
            <Text style={styles.quantityText}>+</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buyText}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
