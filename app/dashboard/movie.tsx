import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

const movies = [
  { id: '1', title: 'Inception', image: require('../../assets/images/icon.png') }
];

export default function MovieScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎬 Available Movies</Text>
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id}
        numColumns={2} 
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.movieCard}>
            <Image source={item.image} style={styles.movieImage} />
            <Text style={styles.movieTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e2d', 
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
  },
  movieCard: {
    flex: 1,
    margin: 10,
    backgroundColor: '#282843',
    borderRadius: 10,
    alignItems: 'center',
    padding: 10,
    shadowColor: '#ff5c5c',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  movieImage: {
    width: 150,
    height: 220,
    borderRadius: 10,
  },
  movieTitle: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});
