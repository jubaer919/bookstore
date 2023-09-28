import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import Books from './components/books/Books';
import AddBook from './components/books/AddBook';
import store from './redux/store';
import { fetchBooks } from './redux/books/booksSlice';

function App() {
  useEffect(() => {
    store.dispatch(fetchBooks());
  }, []);

  return (
    <Provider store={store}>
      <div>
        <h1>Bookstore App</h1>
        <Books />
        <AddBook />
      </div>
    </Provider>
  );
}

export default App;
