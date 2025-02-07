
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Header({ onSearch }) {
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

     
      <TouchableOpacity style={styles.icon}>
        <Ionicons name="cart-outline" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: { flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: '#fff' },
  icon: { padding: 10 },
  searchBar: { flex: 1, backgroundColor: '#f0f0f0', padding: 8, borderRadius: 8, marginHorizontal: 10 },
});
