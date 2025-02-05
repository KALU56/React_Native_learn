import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const furnitureData = [
  {
    id: '1',
    name: 'Royal Palm Sofa',
    price: '$50.18',
    image: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: '2',
    name: 'Leatherette Sofa',
    price: '$30.99',
    image: 'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: '3',
    name: 'Modern Sofa',
    price: '$45.50',
    image: 'https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: '4',
    name: 'Leatherette Sofa',
    price: '$39.99',
    image: 'https://images.pexels.com/photos/1090092/pexels-photo-1090092.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

const FurnitureApp = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{ padding: 20 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Ionicons name="menu" size={24} color="black" />
          <Ionicons name="cart-outline" size={24} color="black" />
        </View>

        <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 20 }}>Furniture in Unique Style</Text>
        <Text style={{ fontSize: 14, color: 'gray', marginVertical: 10 }}>We have a wide range of Furniture</Text>

        <View style={{ flexDirection: 'row', marginVertical: 10 }}>
          <TouchableOpacity style={{ backgroundColor: '#2F4F4F', padding: 10, borderRadius: 10, marginRight: 10 }}>
            <Text style={{ color: 'white' }}>Sofas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor: '#F0F0F0', padding: 10, borderRadius: 10, marginRight: 10 }}>
            <Text style={{ color: 'gray' }}>Chairs</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor: '#F0F0F0', padding: 10, borderRadius: 10 }}>
            <Text style={{ color: 'gray' }}>Table</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={furnitureData}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          renderItem={({ item }) => (
            <View style={{ width: '48%', marginVertical: 10 }}>
              <Image source={{ uri: item.image }} style={{ width: '100%', height: 150, borderRadius: 10 }} />
              <Text style={{ marginTop: 10, fontWeight: 'bold' }}>{item.name}</Text>
              <Text style={{ color: 'gray' }}>{item.price}</Text>
              <TouchableOpacity style={{ backgroundColor: '#2F4F4F', padding: 5, borderRadius: 5, alignItems: 'center', marginTop: 5 }}>
                <Ionicons name="arrow-forward" size={16} color="white" />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
};

export default FurnitureApp;