import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'; // Import StyleSheet here
import { Ionicons } from '@expo/vector-icons';
import { useCart } from '../context/CartContext';

export default function Header({ navigation }) {
  const { cartCount } = useCart();

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
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#fff',
  },
  icon: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cartContainer: {
    position: 'relative',
  },
  cartBadge: {
    position: 'absolute',
    right: -6,
    top: -4,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartBadgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
