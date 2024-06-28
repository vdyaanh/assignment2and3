import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntIcon from 'react-native-vector-icons/AntDesign';
import MovieListScreen from './screens/MovieListScreen';
import WishlistScreen from './screens/WishlistScreen';
import { Provider, useDispatch } from 'react-redux';
import store from './redux/store';
import { fetchWishlist } from './redux/actions';

const Tab = createBottomTabNavigator();

const AppWrapper = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWishlist());
  }, [dispatch]);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Wishlist') {
              iconName = 'heart';
            }

            return <AntIcon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={MovieListScreen} />
        <Tab.Screen name="Wishlist" component={WishlistScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <AppWrapper />
    </Provider>
  );
}
