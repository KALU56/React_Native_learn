import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useCart } from '../context/CartContext';
import styles from './styles/HeaderStyles'; 

export default function Header({ navigation }) {
  const { cartCount, clearCart } = useCart(); 

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Ionicons name="menu" size={24} color="black" style={styles.icon} />
      </TouchableOpacity>

      <Text style={styles.title}>Furniture Shop</Text>

      <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={styles.cartContainer}>
        <Ionicons name="cart" size={24} color="black" />
        {cartCount > 0 && (
          <View style={styles.cartBadge}>
            <Text style={styles.cartBadgeText}>{cartCount}</Text>
          </View>
        )}
      </TouchableOpacity>

      <TouchableOpacity onPress={clearCart} style={styles.clearCartButton}>
        <Ionicons name="trash" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );
}
