// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import classes from './IndividualBook.module.css';

export default function IndividualBook(
  {
    title, author, gunra, onRemove, id,
  },
) {
  function btnClickHandeler() {
    onRemove(
      {
        title, author, gunra, id,
      },
    );
  }

  return (
    <div className={classes['book-container']}>
      <p className={classes.gunra}>{gunra}</p>
      <h1 className={classes.title}>{title}</h1>
      <p className={classes.author}>{author}</p>
      <button type="button" className={classes['btn-remove']} onClick={btnClickHandeler}>Remove</button>
    </div>
  );
}

IndividualBook.propTypes = {
  title: PropTypes.string.isRequired,
};

IndividualBook.propTypes = {
  author: PropTypes.string.isRequired,
};

IndividualBook.propTypes = {
  id: PropTypes.string.isRequired,
};

IndividualBook.propTypes = {
  gunra: PropTypes.string.isRequired,
};

IndividualBook.propTypes = {
  onRemove: PropTypes.func.isRequired,
};
