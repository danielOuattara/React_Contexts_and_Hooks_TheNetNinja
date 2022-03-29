import { useContext } from "react";
import { BookContext } from "./../contexts/BookContext";

const BookDetails = ({ title, author, id }) => {
  const { dispatch } = useContext(BookContext);

  const removeBook = () => {
    dispatch({ type: "REMOVE_BOOK", id });
  };

  return (
    <li onClick={() => removeBook(id)}>
      <div className="title"> {title}</div>
      <div className="author"> {author}</div>
    </li>
  );
};

export default BookDetails;
