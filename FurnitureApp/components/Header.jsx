// components/Header.js
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles/HeaderStyles'; // Correct import path

export default function Header({ onSearch, onCartPress }) {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.icon}>
        <Ionicons name="menu" size={24} color="black" />
      </TouchableOpacity>

      <TextInput
        style={styles.searchBar}
        placeholder="Search"
        value={searchQuery}
        onChangeText={setSearchQuery}
        onSubmitEditing={() => onSearch(searchQuery)}
      />

      <TouchableOpacity style={styles.icon} onPress={onCartPress}>
        <Ionicons name="cart-outline" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}