import React, { useLayoutEffect } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const DetailsScreen = ({ route, navigation }) => {
  const { item } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({ title: item.title });
  }, [navigation, item]);

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.date}>{item.date}</Text>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15, backgroundColor: '#fff' },
  image: { width: '100%', height: 250, borderRadius: 10 },
  date: { color: 'gray', marginTop: 15 },
  title: { fontSize: 24, fontWeight: 'bold', marginVertical: 10 },
  description: { fontSize: 16, lineHeight: 24, color: '#333' }
});

export default DetailsScreen;