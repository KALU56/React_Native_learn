// frontend/App.js
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function App() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', price: '', description: '', image: '' });
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  const BASE_URL = 'http://192.168.66.188:5002/products';

  // Fetch products
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch(BASE_URL);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
      Alert.alert('Error', 'Unable to fetch products.');
    } finally {
      setLoading(false);
    }
  };

  // Create product
  const handleCreateProduct = async () => {
    if (!newProduct.name || !newProduct.price) {
      Alert.alert('Validation Error', 'Name and Price are required!');
      return;
    }
    try {
      const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
      });
      if (response.ok) {
        fetchProducts();
        setNewProduct({ name: '', price: '', description: '', image: '' });
      } else {
        Alert.alert('Error', 'Failed to create product.');
      }
    } catch (error) {
      console.error('Error creating product:', error);
      Alert.alert('Error', 'Failed to create product.');
    }
  };

  // Update product
  const handleUpdateProduct = async (id) => {
    try {
      const updatedProduct = { ...selectedProduct, price: parseFloat(selectedProduct.price) };
      const response = await fetch(`${BASE_URL}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedProduct),
      });
      if (response.ok) {
        fetchProducts();
        setSelectedProduct(null);
      } else {
        Alert.alert('Error', 'Failed to update product.');
      }
    } catch (error) {
      console.error('Error updating product:', error);
      Alert.alert('Error', 'Failed to update product.');
    }
  };

  // Delete product
  const handleDeleteProduct = async (id) => {
    Alert.alert(
      'Delete Confirmation',
      'Are you sure you want to delete this product?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'OK',
          onPress: async () => {
            try {
              const response = await fetch(`${BASE_URL}/${id}`, {
                method: 'DELETE',
              });
              if (response.ok) {
                fetchProducts();
              } else {
                Alert.alert('Error', 'Failed to delete product.');
              }
            } catch (error) {
              console.error('Error deleting product:', error);
              Alert.alert('Error', 'Failed to delete product.');
            }
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Product Management</Text>

      <TextInput placeholder="Name" value={newProduct.name} onChangeText={(text) => setNewProduct({ ...newProduct, name: text })} style={styles.input} />
      <TextInput placeholder="Price" value={newProduct.price} onChangeText={(text) => setNewProduct({ ...newProduct, price: text })} style={styles.input} keyboardType="numeric" />
      <TextInput placeholder="Description" value={newProduct.description} onChangeText={(text) => setNewProduct({ ...newProduct, description: text })} style={styles.input} />
      <TextInput placeholder="Image URL" value={newProduct.image} onChangeText={(text) => setNewProduct({ ...newProduct, image: text })} style={styles.input} />

      <Button title="Add Product" onPress={handleCreateProduct} />

      {loading ? <Text>Loading products...</Text> : (
        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => setSelectedProduct(item)} style={styles.productItem}>
              <Text>{item.name} - ${item.price}</Text>
              <Button title="Delete" color="red" onPress={() => handleDeleteProduct(item.id)} />
            </TouchableOpacity>
          )}
        />
      )}

      {selectedProduct && (
        <View style={styles.updateContainer}>
          <Text style={styles.header}>Update Product</Text>
          <TextInput value={selectedProduct.name} onChangeText={(text) => setSelectedProduct({ ...selectedProduct, name: text })} style={styles.input} />
          <TextInput value={selectedProduct.price.toString()} onChangeText={(text) => setSelectedProduct({ ...selectedProduct, price: text })} style={styles.input} keyboardType="numeric" />
          <TextInput value={selectedProduct.description} onChangeText={(text) => setSelectedProduct({ ...selectedProduct, description: text })} style={styles.input} />
          <TextInput value={selectedProduct.image} onChangeText={(text) => setSelectedProduct({ ...selectedProduct, image: text })} style={styles.input} />
          <Button title="Update Product" onPress={() => handleUpdateProduct(selectedProduct.id)} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 5 },
  productItem: { marginBottom: 10, padding: 10, backgroundColor: '#f9f9f9', borderRadius: 5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  updateContainer: { marginTop: 20 }
});
