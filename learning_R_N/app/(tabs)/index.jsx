import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet, SafeAreaView } from 'react-native';

const products = [
  { id: '1', name: 'Royal Palm Sofa', price: '$50.18', image: 'https://images.pexels.com/photos/1090092/pexels-photo-1090092.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: '2', name: 'Leatherette Sofa', price: '$30.99', image: 'https://images.pexels.com/photos/2343465/pexels-photo-2343465.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: '3', name: 'Modern Sofa', price: '$45.00', image: 'https://images.pexels.com/photos/6758238/pexels-photo-6758238.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: '4', name: 'Classic Sofa', price: '$55.00', image: 'https://images.pexels.com/photos/30491861/pexels-photo-30491861/free-photo-of-elegant-vintage-dining-room-with-chandeliers.jpeg?auto=compress&cs=tinysrgb&w=600' },
];

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [stockStatus, setStockStatus] = useState({});
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const status = {};
    products.forEach(product => {
      status[product.id] = Math.random() > 0.5 ? 'In Stock' : 'Out of Stock';
    });
    setStockStatus(status);
  }, []);

  const toggleFavorite = (id) => {
    setFavorites(prev => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]);
  };

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  if (selectedProduct) {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={() => setSelectedProduct(null)} style={styles.backButton}>
          <Text style={styles.backText}>{'< Back'}</Text>
        </TouchableOpacity>
        <Image source={{ uri: selectedProduct.image }} style={styles.detailImage} />
        <Text style={styles.productTitle}>{selectedProduct.name}</Text>
        <Text style={styles.productPrice}>{selectedProduct.price}</Text>
        <Text style={styles.description}>Minimal Sofa made of natural wood. Simple and minimal design.</Text>
        <Text style={styles.stockStatus}>{stockStatus[selectedProduct.id]}</Text>

        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={decreaseQuantity} style={styles.quantityButton}><Text>-</Text></TouchableOpacity>
          <Text style={styles.quantityText}>{quantity}</Text>
          <TouchableOpacity onPress={increaseQuantity} style={styles.quantityButton}><Text>+</Text></TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buyButtonText}>Buy Now</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Furniture in Unique Style</Text>
      <FlatList
        data={products}
        keyExtractor={item => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <TouchableOpacity onPress={() => toggleFavorite(item.id)} style={styles.favoriteButton}>
              <Text style={{ color: favorites.includes(item.id) ? 'red' : 'gray' }}>&#10084;</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSelectedProduct(item)}>
              <Image source={{ uri: item.image }} style={styles.productImage} />
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>{item.price}</Text>
              <Text style={styles.stockStatus}>{stockStatus[item.id]}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 10,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
    margin: 5,
    flex: 1,
    alignItems: 'center',
    elevation: 3,
    position: 'relative',
  },
  favoriteButton: {
    position: 'absolute',
    top: 5,
    right: 5,
    padding: 5,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 5,
  },
  productPrice: {
    fontSize: 14,
    color: 'green',
  },
  stockStatus: {
    fontSize: 12,
    color: '#FF4500',
    marginTop: 5,
  },
  backButton: {
    padding: 10,
  },
  backText: {
    fontSize: 16,
    color: '#007BFF',
  },
  detailImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  productTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginVertical: 5,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  quantityButton: {
    padding: 10,
    backgroundColor: '#DDD',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  quantityText: {
    fontSize: 18,
  },
  buyButton: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buyButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
