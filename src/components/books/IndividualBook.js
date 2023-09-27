import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/booksSlice';
import classes from './IndividualBook.module.css';

const IndividualBook = ({
  id, title, author, category,
}) => {
  const dispatch = useDispatch();
  return (
    <div className={classes['book-container']}>
      <p className={classes.gunra}>{category}</p>
      <h1 className={classes.title}>{title}</h1>
      <p className={classes.author}>{author}</p>
      <button type="button" className={classes['btn-remove']} onClick={() => dispatch(removeBook(id))}>
        Remove
      </button>
    </div>
  );
};

IndividualBook.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default IndividualBook;
