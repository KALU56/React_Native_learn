import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useCart } from '../context/CartContext';
import styles from './styles/HeaderStyles';

export default function Header() {
  const navigation = useNavigation();
  const { cartCount, clearCart } = useCart();

  return (
    <SafeAreaView style={styles.safeArea}> 
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.icon}>
          <Ionicons name="menu" size={24} color="black" />
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
    </SafeAreaView>
  );
}
