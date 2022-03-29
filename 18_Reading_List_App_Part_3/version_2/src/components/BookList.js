import React from "react";
import { useContext } from "react";
import { BookContext } from "./../contexts/BookContext";
import BookDetails from "./BookDetails";

const Booklist = () => {
  const { books } = useContext(BookContext);
  return books.length ? (
    <div className="book-list">
      <ul>
        {books.map((book) => (
          <BookDetails {...book} key={book.id} />
        ))}
      </ul>
    </div>
  ) : (
    <div className="empty"> No Books to read; free time </div>
  );
};

export default Booklist;
