import React, { useEffect, useRef, useState } from 'react';
import { View, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const adImages = [
  "https://images.pexels.com/photos/276746/pexels-photo-276746.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/1543447/pexels-photo-1543447.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/1885562/pexels-photo-1885562.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/6588592/pexels-photo-6588592.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/279652/pexels-photo-279652.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/189295/pexels-photo-189295.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/3965513/pexels-photo-3965513.jpeg?auto=compress&cs=tinysrgb&w=400"
];

export default function Promotion({ onAdPress }) {
  const scrollRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => {
        const nextIndex = (prevIndex + 1) % adImages.length;
        scrollRef.current?.scrollTo({ x: nextIndex * 300, animated: true });
        return nextIndex;
      });
    }, 2000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        ref={scrollRef}
      >
        {adImages.map((image, index) => (
          <TouchableOpacity key={index} onPress={onAdPress}>
            <Image source={{ uri: image }} style={styles.image} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginVertical: 10 },
  image: { width: 300, height: 150, borderRadius: 10, marginHorizontal: 5 },
});