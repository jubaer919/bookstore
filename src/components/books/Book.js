// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import IndividualBook from './IndividualBook';

function Book({ booksInfo, onRemove }) {
  // eslint-disable-next-line no-console
  console.log(booksInfo);
  return (
    <>
      {booksInfo.map((b) => (
        <IndividualBook
          key={Math.random()}
          id={b.id}
          title={b.title}
          author={b.author}
          gunra={b.gunra}
          onRemove={onRemove}
        />
      ))}
    </>
  );
}

Book.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  booksInfo: PropTypes.array.isRequired,
};

Book.propTypes = {
  onRemove: PropTypes.func.isRequired,
};

export default Book;
