import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/booksSlice';
import catagorieReducer from './catagories/catagorieSlice';

const store = configureStore({
  reducer: {
    books: bookReducer,
    catagories: catagorieReducer,
  },
});

export default store;
