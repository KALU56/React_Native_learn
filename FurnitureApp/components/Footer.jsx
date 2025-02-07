import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Footer({ onClearFavorites }) {
  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={onClearFavorites} style={styles.favoriteButtonFooter}>
        <Text style={styles.footerText}>Clear Favorites</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    alignItems: 'center',
    padding: 10,
  },
  favoriteButtonFooter: {
    backgroundColor: '#FF6347',
    padding: 10,
    borderRadius: 5,
  },
  footerText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});