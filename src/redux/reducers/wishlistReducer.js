import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST, SET_WISHLIST } from '../actions';

const initialState = [];

const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WISHLIST:
      return action.payload;
    case ADD_TO_WISHLIST:
      return [...state, action.payload];
    case REMOVE_FROM_WISHLIST:
      return state.filter(movie => movie.id !== action.payload);
    default:
      return state;
  }
};

export default wishlistReducer;
