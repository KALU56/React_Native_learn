import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useCart } from '../context/CartContext';
import styles from './styles/FooterStyles'; 

export default function Footer({ onHomePress, onFavoritePress, onCategoryPress, onProfilePress }) {
  const { clearCart } = useCart(); 

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

      <TouchableOpacity onPress={clearCart} style={styles.favoriteButtonFooter}>
        <Ionicons name="trash" size={24} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
}
