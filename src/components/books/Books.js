import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks, selectAllBooks } from '../../redux/books/booksSlice';
import Book from './Book';
import AddBook from './AddBook';
import classes from './AddBook.module.css';

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector(selectAllBooks);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div>
      <div className={classes.books}>
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
      <AddBook />
    </div>
  );
};

export default Books;
