import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookAsync } from '../../redux/books/booksSlice';
import classes from './IndividualBook.module.css';

const Book = ({
  title, author, category, id,
}) => {
  const dispatch = useDispatch();

  const randomProgress = Math.floor(Math.random() * 100);
  const chapterProgress = `CHAPTER ${Math.floor(Math.random() * 20)}`;
  const progresspercentage = `${randomProgress}%`;

  const handleRemoveBook = () => {
    dispatch(removeBookAsync(id));
  };
  return (
    <div className={classes['book-container']}>
      <div>
        <p className={classes.gunra}>{category}</p>
        <h1 className={classes.heading}>{title}</h1>
        <p className={classes.author}>{author}</p>
        <div>
          <button type="button" className={`${classes['btn-remove']} ${classes['first-button']}`}>Comments</button>
          <button type="button" className={classes['btn-remove']} onClick={handleRemoveBook}>
            Remove
          </button>
          <button type="button" className={classes['btn-remove']}>Edit</button>
        </div>
      </div>
      <div className={classes.design}>
        <div className={classes.progress}>
          <div className={classes['circle-wrap']}>
            <div className={classes.circle}>
              <svg>
                <circle cx="35" cy="35" r="35" />
                <circle cx="35" cy="35" r="35" />
              </svg>
            </div>
          </div>
          <div>
            <h3 className={classes.progresspercentage}>{progresspercentage}</h3>
            <p className={classes.completed}>Completed</p>
          </div>
        </div>
        <div className={classes.chapter}>
          <p className={classes.current}>CURRENT CHAPTER</p>
          <h3 className={classes['chapter-name']}>{chapterProgress}</h3>
          <button type="button" className={classes['btn-update']}>UPDATE PROGRESS</button>
        </div>
      </div>
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
