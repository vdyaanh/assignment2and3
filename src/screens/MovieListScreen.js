import React, { useEffect, useState } from 'react';
import { View, Text, Image, Button, FlatList, Alert, StyleSheet } from 'react-native';
import { Card } from '@rneui/themed';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist } from '../redux/actions';

const MovieListScreen = () => {
  const [movies, setMovies] = useState([]);
  const wishlist = useSelector(state => state.wishlist);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('http://www.omdbapi.com/?s=marvel&apikey=8f60a368')
      .then(response => response.json())
      .then(data => setMovies(data.Search))
      .catch(error => console.error(error));
  }, []);

  const handleAddToWishlist = (movie) => {
    if (wishlist.find(item => item.imdbID === movie.imdbID)) {
      Alert.alert('Film sudah ditambahkan');
    } else {
      dispatch(addToWishlist(movie));
    }
  };

  const renderItem = ({ item }) => (
    <Card>
      <Card.Title>{item.Title}</Card.Title>
      <Card.Image source={{ uri: item.Poster }} />
      <Button
        title="ADD TO WISHLIST"
        onPress={() => handleAddToWishlist(item)}
      />
    </Card>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Movies</Text>
      <FlatList
        data={movies}
        renderItem={renderItem}
        keyExtractor={item => item.imdbID}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default MovieListScreen;
