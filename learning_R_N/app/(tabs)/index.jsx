import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native';
import { Link } from 'expo-router';
import React from 'react';
import icedcoffeeimg from '@/assets/images/coffee.jpg';

const CoffeeShop = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={icedcoffeeimg} resizeMode="cover" style={styles.image}>
        <Text style={styles.title}>Coffee Shop</Text>
        <Link href="/(coffee)/menu" asChild> 
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Menu</Text>
          </Pressable>
        </Link>
      </ImageBackground>
    </View>
  );
};

export default CoffeeShop;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', // Center content horizontally
  },
  title: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  button: {
    width: 200,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#d2691e', // Coffee brown color
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5, // For Android shadow effect
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
