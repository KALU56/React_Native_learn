import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import axios from 'axios';

export default function App() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [stockStatus, setStockStatus] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);  // Loading state for API call

  useEffect(() => {
    // Replace with your machine's local IP if testing on a physical device
    axios.get('http://192.168.1.5:5002/products')  // Replace with your local IP address
      .then(response => {
        console.log(response.data);  // Log the data to check its structure
        setProducts(response.data);
        const status = {};
        response.data.forEach(product => {
          status[product.id] = Math.random() > 0.5 ? 'In Stock' : 'Out of Stock';
        });
        setStockStatus(status);
        setLoading(false);  // Set loading to false after data is fetched
      })
      .catch(error => {
        console.error("There was an error fetching the products!", error);
        setLoading(false);  // Set loading to false in case of error
      });
  }, []);

  const toggleFavorite = (id) => {
    setFavorites(prev => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]);
  };

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  if (selectedProduct) {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={() => setSelectedProduct(null)} style={styles.backButton}>
          <Text style={styles.backText}>{'< Back'}</Text>
        </TouchableOpacity>
        {selectedProduct.image ? (
          <Image source={{ uri: selectedProduct.image }} style={styles.detailImage} />
        ) : (
          <View style={styles.placeholderImage} />  // Placeholder if no image
        )}
        <Text style={styles.productTitle}>{selectedProduct.name || 'No Name'}</Text>
        <Text style={styles.productPrice}>{selectedProduct.price || 'No Price'}</Text>
        <Text style={styles.description}>{selectedProduct.description || 'No Description'}</Text>
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
        keyExtractor={item => item.id.toString()}  // Ensure id is used as a key
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <TouchableOpacity onPress={() => toggleFavorite(item.id)} style={styles.favoriteButton}>
              <Text style={{ color: favorites.includes(item.id) ? 'red' : 'gray' }}>&#10084;</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSelectedProduct(item)}>
              {item.image ? (
                <Image source={{ uri: item.image }} style={styles.productImage} />
              ) : (
                <View style={styles.placeholderImage} />  // Placeholder if no image
              )}
              <Text style={styles.productName}>{item.name || 'No Name'}</Text>
              <Text style={styles.productPrice}>{item.price || 'No Price'}</Text>
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
  placeholderImage: {
    width: 100,
    height: 100,
    backgroundColor: '#E0E0E0',
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
