import { useContext } from "react";
import { BookContext } from "./../contexts/BookContext";

const BookDetails = ({ title, author, id }) => {
  const { removeBook } = useContext(BookContext);
  return (
    <li key={id} onClick={() => removeBook(id)}>
      <div className="title"> {title}</div>
      <div className="author"> {author}</div>
    </li>
  );
};

export default BookDetails;
