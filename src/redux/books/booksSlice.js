// slices/bookSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  books: [],
  status: 'idle',
  error: null,
};

// export const fetchBooks = createAsyncThunk('book/fetchBooks', async () => {
//   const response = await axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/54ctZ95Mc0DVi30nwDMc/books');
//   const books = Object.keys(response.data).map((key) => ({
//     item_id: key,
//     ...response.data[key][0],
//   }));
//   return books;
// });

export const fetchBooks = createAsyncThunk('book/fetchBooks', async () => {
  const response = await axios.get(
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/54ctZ95Mc0DVi30nwDMc/books',
  );

  /* eslint-disable camelcase */
  const books = Object.entries(response.data).map(([item_id, bookDetails]) => ({
    item_id,
    ...bookDetails[0],
  }));

  return books;
});

export const addBookAsync = createAsyncThunk('books/addBookAsync', async (newBookInfo) => {
  const response = await axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/54ctZ95Mc0DVi30nwDMc/books', newBookInfo);
  return response.data[0];
});

export const removeBookAsync = createAsyncThunk('books/removeBookAsync', async (itemId) => {
  // eslint-disable-next-line no-console
  console.log('Removing book with itemId:', itemId);
  await axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/54ctZ95Mc0DVi30nwDMc/books/${itemId}`);
  return itemId;
});

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addBookAsync.pending, (state) => {
        state.status = 'Adding Book...';
      })
      .addCase(addBookAsync.fulfilled, (state, action) => {
        state.status = 'Book Added';
        state.books.push(action.payload);
      })
      .addCase(addBookAsync.rejected, (state, action) => {
        state.status = 'Failed to Add Book';
        state.error = action.error.message;
      })
      .addCase(removeBookAsync.fulfilled, (state, action) => {
        state.status = 'Booked Removed';
        state.books = state.books.filter((book) => book.id !== action.payload);
      });
  },
});

export const { removeBook } = bookSlice.actions;
export const selectAllBooks = (state) => state.book.books;
export default bookSlice.reducer;
