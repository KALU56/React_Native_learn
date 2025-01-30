import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import React from 'react';

const foodItems = [
  { id: '1', name: 'Cappuccino', image: require('@/assets/images/cappuccino.jpg') },
  { id: '2', name: 'Espresso', image: require('@/assets/images/espresso.jpg') },
  { id: '3', name: 'Latte', image: require('@/assets/images/latte.jpg') },
  { id: '4', name: 'Mocha', image: require('@/assets/images/mocha.jpg') },
  { id: '5', name: 'Iced Coffee', image: require('@/assets/images/iced-coffee.jpg') },
];

const Menu = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>
      <FlatList
        data={foodItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.itemText}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemContainer: {
    backgroundColor: 'white',
    marginVertical: 8,
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: 200,
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  itemText: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
  },
});
