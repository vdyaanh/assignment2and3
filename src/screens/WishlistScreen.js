import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { Card } from '@rneui/themed';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromWishlist } from '../redux/actions';

const WishlistScreen = () => {
  const wishlist = useSelector(state => state.wishlist);
  const dispatch = useDispatch();

  const handleRemoveFromWishlist = (movie) => {
    dispatch(removeFromWishlist(movie.imdbID));
  };

  const renderItem = ({ item }) => (
    <Card>
      <Card.Title>{item.Title}</Card.Title>
      <Card.Image source={{ uri: item.Poster }} />
      <Button
        title="Remove from Wishlist"
        onPress={() => handleRemoveFromWishlist(item)}
      />
    </Card>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={wishlist}
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
});

export default WishlistScreen;
