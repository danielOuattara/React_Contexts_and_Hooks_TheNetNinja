import { createContext, useState } from "react";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([]);

  const addBook = (title, author) => {
    return setBooks([
      ...books,
      { title, author, id: new Date().getTime.toString() },
    ]);
  };

  const removeBook = (id) => {
    return setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
