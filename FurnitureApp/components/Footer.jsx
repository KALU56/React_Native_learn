import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useCart } from '../context/CartContext'; // Import the context

export default function Footer({ onHomePress, onFavoritePress, onCategoryPress, onProfilePress }) {
  const { clearCart } = useCart(); // Destructure clearCart from context

  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={onHomePress} style={styles.iconButton}>
        <Ionicons name="home" size={24} color="#000" />
      </TouchableOpacity>

      <TouchableOpacity onPress={onFavoritePress} style={styles.iconButton}>
        <Ionicons name="heart" size={24} color="#000" />
      </TouchableOpacity>

      <TouchableOpacity onPress={onCategoryPress} style={styles.iconButton}>
        <Ionicons name="apps" size={24} color="#000" />
      </TouchableOpacity>

      <TouchableOpacity onPress={onProfilePress} style={styles.iconButton}>
        <Ionicons name="person" size={24} color="#000" />
      </TouchableOpacity>

      {/* "Clear Cart" Button */}
      <TouchableOpacity onPress={clearCart} style={styles.favoriteButtonFooter}>
        <Ionicons name="trash" size={24} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  iconButton: {
    padding: 10,
  },
  favoriteButtonFooter: {
    backgroundColor: '#FF6347',
    padding: 10,
    borderRadius: 5,
  },
});
