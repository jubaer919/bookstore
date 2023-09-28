import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookAsync } from '../../redux/books/booksSlice';
import classes from './IndividualBook.module.css';

const Book = ({
  title, author, category, id,
}) => {
  const dispatch = useDispatch();
  const handleRemoveBook = () => {
    dispatch(removeBookAsync(id));
  };
  return (
    <div className={classes['book-container']}>
      <p className={classes.gunra}>{category}</p>
      <h1>{title}</h1>
      <p className={classes.author}>{author}</p>
      <button type="button" className={classes['btn-remove']} onClick={handleRemoveBook}>
        Remove
      </button>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
