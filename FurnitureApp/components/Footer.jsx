// components/Footer.js
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles/FooterStyles'; // Correct import path

export default function Footer({ onClearFavorites, onHomePress, onFavoritePress, onCategoryPress, onProfilePress }) {
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

      <TouchableOpacity onPress={onClearFavorites} style={styles.favoriteButtonFooter}>
        <Ionicons name="trash" size={24} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
}