import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Books from './components/books/Books';
import store from './redux/store';
import { fetchBooks } from './redux/books/booksSlice';
import Catagories from './components/catagories/Catagories';
import NavBar from './components/Layout/NavBar';

function App() {
  useEffect(() => {
    store.dispatch(fetchBooks());
  }, []);

  return (
    <Provider store={store}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Catagories />} />
      </Routes>
    </Provider>
  );
}

export default App;
