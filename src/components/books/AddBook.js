// components/AddBook.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBookAsync } from '../../redux/books/booksSlice';
import classes from './AddBook.module.css';

const AddBook = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const categoryChangeHandler = (event) => {
    setCategory(event.target.value);
  };

  const submitChangeHandler = async (event) => {
    event.preventDefault();

    if (title.trim().length === 0 || category.trim().length === 0) {
      return;
    }

    const newBookInfo = {
      item_id: `item${Date.now()}`,
      title,
      author: 'Christopher Nolen',
      category,
    };

    await dispatch(addBookAsync(newBookInfo))
      .then(() => {
        setCategory('');
        setTitle('');
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error('Error adding book:', error);
      });
  };

  return (
    <div className={classes['form-container']}>
      <h1 className={classes['heading-primary']}>Add New Book</h1>
      <form onSubmit={submitChangeHandler} className={classes.form}>
        <div className={classes['form-group']}>
          <input
            type="text"
            placeholder="Enter Title"
            onChange={titleChangeHandler}
            value={title}
            className={classes['input-1']}
          />
          <input
            type="text"
            placeholder="Enter Category"
            onChange={categoryChangeHandler}
            value={category}
            className={classes['input-2']}
          />

          <div className={classes['btn-container']}>
            <button type="submit" className={classes['btn-add']}>
              Add Book
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
