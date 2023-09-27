import { useSelector } from 'react-redux';
import IndividualBook from './IndividualBook';

function Book() {
  const booksInfo = useSelector((state) => state.books.books);

  return (
    <>
      {booksInfo.map((b) => (
        <IndividualBook
          key={Math.random()}
          id={b.item_id}
          title={b.title}
          author={b.author}
          category={b.category}
        />
      ))}
    </>
  );
}

export default Book;
