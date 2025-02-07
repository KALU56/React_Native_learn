import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Header from './Header';

const sofas = [
  { id: '1', name: 'Royal Palm Sofa', price: '$50.18', image: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: '2', name: 'Leatherette Sofa', price: '$30.99', image: 'https://media.istockphoto.com/id/1366569235/photo/sofa-isolated-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=tIrsy0P78CdDNk7wJ-o9QBgA9Dw_53dmX9PQhsYABpY=' },
  { id: '3', name: 'Modern Sofa', price: '$40.99', image: 'https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: '4', name: 'Minimalist Sofa', price: '$45.99', image: 'https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=400' },
];

export default function SofaList({ onSelectSofa }) {
  const [filteredSofas, setFilteredSofas] = useState(sofas);

  const handleSearch = (query) => {
    const filtered = sofas.filter((sofa) =>
      sofa.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredSofas(filtered);
  };

  return (
    <View style={{ flex: 1 }}>
      <Header onSearch={handleSearch} />

      <FlatList
        data={filteredSofas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => onSelectSofa(item)}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </TouchableOpacity>
        )}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: { flex: 1, margin: 10, backgroundColor: '#fff', padding: 10, borderRadius: 10, alignItems: 'center' },
  image: { width: 100, height: 100, borderRadius: 10 },
  title: { fontSize: 16, fontWeight: 'bold', marginTop: 5 },
  price: { fontSize: 14, color: 'green', marginTop: 5 },
});
