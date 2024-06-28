import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../config/config';

// Action types
export const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST';
export const REMOVE_FROM_WISHLIST = 'REMOVE_FROM_WISHLIST';
export const SET_WISHLIST = 'SET_WISHLIST';

// Action creators
export const setWishlist = (wishlist) => ({
  type: SET_WISHLIST,
  payload: wishlist,
});

export const fetchWishlist = () => async (dispatch) => {
  const querySnapshot = await getDocs(collection(db, 'assignments', 'assignments', 'wishlist'));
  const wishlist = [];
  querySnapshot.forEach((doc) => {
    wishlist.push({ id: doc.id, ...doc.data() });
  });
  dispatch(setWishlist(wishlist));
};

export const addToWishlist = (movie) => async (dispatch) => {
  try {
    const docRef = await addDoc(collection(db, 'assignments', 'assignments', 'wishlist'), movie);
    dispatch({
      type: ADD_TO_WISHLIST,
      payload: { id: docRef.id, ...movie },
    });
  } catch (error) {
    console.error('Error adding document: ', error);
  }
};

export const removeFromWishlist = (id) => async (dispatch) => {
  try {
    await deleteDoc(doc(db, 'assignments', 'assignments', 'wishlist', id));
    dispatch({
      type: REMOVE_FROM_WISHLIST,
      payload: id,
    });
  } catch (error) {
    console.error('Error removing document: ', error);
  }
};
