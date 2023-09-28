// components/AddBook.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBookAsync } from '../../redux/books/booksSlice';
import classes from './AddBook.module.css';

const AddBook = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const authorChangeHandler = (event) => {
    setAuthor(event.target.value);
  };

  const categoryChangeHandler = (event) => {
    setCategory(event.target.value);
  };

  const submitChangeHandler = (event) => {
    event.preventDefault();

    if (title.trim().length === 0 || author.trim().length === 0 || category.trim().length === 0) {
      return;
    }

    const newBookInfo = {
      item_id: `item${Date.now()}`,
      title,
      author,
      category,
    };

    dispatch(addBookAsync(newBookInfo))
      .then(() => {
        // Reset the form
        setAuthor('');
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
      <h1>Add New Book</h1>
      <form onSubmit={submitChangeHandler}>
        <div className={classes['form-group']}>
          <input
            type="text"
            placeholder="Enter Title"
            onChange={titleChangeHandler}
            value={title}
          />
          <input
            type="text"
            placeholder="Enter Category"
            onChange={categoryChangeHandler}
            value={category}
          />
          <input
            type="text"
            placeholder="Enter Author Name"
            onChange={authorChangeHandler}
            value={author}
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
