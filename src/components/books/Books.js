import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks, selectAllBooks } from '../../redux/books/booksSlice';
import Book from './Book';

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector(selectAllBooks);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch, books]);

  return (
    <div>
      {books.map((book) => (
        <Book
          key={book.item_id}
          id={book.item_id}
          title={book.title}
          author={book.author}
          category={book.category}
        />
      ))}
    </div>
  );
};

export default Books;
