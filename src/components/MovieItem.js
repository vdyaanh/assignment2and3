import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Card } from '@rneui/themed';
import AntIcon from 'react-native-vector-icons/AntDesign';

const MovieItem = ({ title, poster, year, onAddToWishlist, renderRightActions, disabled }) => {
  return (
    <Card>
      <View style={styles.container}>
        <Image source={{ uri: poster }} style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.year}>{year}</Text>
          {onAddToWishlist && (
            <TouchableOpacity
              onPress={onAddToWishlist}
              disabled={disabled}
              style={[styles.button, disabled && styles.buttonDisabled]}
            >
              <AntIcon name="pluscircleo" size={24} color={disabled ? "gray" : "tomato"} />
              <Text style={styles.buttonText}>Add to Wishlist</Text>
            </TouchableOpacity>
          )}
          {renderRightActions && renderRightActions()}
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 150,
  },
  info: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  year: {
    fontSize: 14,
    color: 'gray',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonText: {
    marginLeft: 5,
    fontSize: 16,
    color: 'tomato',
  },
});

export default MovieItem;
