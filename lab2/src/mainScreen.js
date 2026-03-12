import React, { useState } from 'react';
import { FlatList, View, Text, Image, StyleSheet, ActivityIndicator, RefreshControl, TouchableOpacity } from 'react-native';
import { NEWS } from './testData';

const MainScreen = ({ navigation }) => {
  const [data, setData] = useState(NEWS);
  const [refreshing, setRefreshing] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setData(NEWS);
      setRefreshing(false);
    }, 2000);
  };

  const handleLoadMore = () => {
    if (loadingMore) return;
    setLoadingMore(true);
    setTimeout(() => {
      const newData = NEWS.map(item => ({ 
        ...item, 
        id: Math.random().toString(),
        title: `Loaded News #${Math.floor(Math.random() * 100)}`
      }));
      setData([...data, ...newData]);
      setLoadingMore(false);
    }, 1500);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.card} 
      onPress={() => navigation.navigate('Details', { item })}
    >
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.date}>{item.date}</Text>
        <Text style={styles.title}>{item.title}</Text>
        <Text numberOfLines={2} style={styles.desc}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      onEndReached={handleLoadMore}
      onEndReachedThreshold={0.5}
      // opt for render
      initialNumToRender={10}
      maxToRenderPerBatch={5}
      windowSize={5}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      ListHeaderComponent={() => <Text style={styles.header}>all world at one page</Text>}
      ListFooterComponent={() => loadingMore ? <ActivityIndicator size="small" color="#0000ff" /> : null}
    />
  );
};

const styles = StyleSheet.create({
  card: { padding: 15, backgroundColor: 'white' },
  image: { width: '100%', height: 200, borderRadius: 10 },
  textContainer: { marginTop: 10 },
  date: { color: 'gray', fontSize: 12 },
  title: { fontSize: 18, fontWeight: 'bold', marginVertical: 4 },
  desc: { color: '#444' },
  separator: { height: 1, backgroundColor: '#eee', marginVertical: 10 },
  header: { fontSize: 28, fontWeight: 'bold', padding: 15 }
});

export default MainScreen;