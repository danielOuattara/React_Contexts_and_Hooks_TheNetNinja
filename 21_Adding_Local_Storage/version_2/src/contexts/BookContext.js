// import { createContext, useState } from "react";

// export const BookContext = createContext();

// const BookContextProvider = (props) => {
//   const [books, setBooks] = useState([
//     { title: "The way of King", author: "Rod Stewart", id: 1 },
//     { title: "The name of the wind", author: "Big Joe", id: 2 },
//     { title: "The final empire", author: " Lemon Ice", id: 3 },
//   ]);

//   const addBook = (title, author) => {
//     return setBooks([
//       ...books,
//       { title, author, id: new Date().getTime().toString() },
//     ]);
//   };

//   const removeBook = (id) => {
//     return setBooks(books.filter((book) => book.id !== id));
//   };

//   return (
//     <BookContext.Provider value={{ books, addBook, removeBook }}>
//       {props.children}
//     </BookContext.Provider>
//   );
// };

// export default BookContextProvider;

//-----------------------------------------------------------------------

import { createContext, useEffect, useReducer } from "react";
import { bookReducer } from "../reducers/bookReducer";
export const BookContext = createContext();

const BookContextProvider = (props) => {
  const initialState = [];

  const booksUpdate = () => {
    /*this is used as the 3rd arg in useReducer, and helps to retrieve data from localStorage */
    const booksLocalData = localStorage.getItem("books");
    return booksLocalData ? JSON.parse(booksLocalData) : [];
  };

  const [books, dispatch] = useReducer(bookReducer, initialState, booksUpdate);

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
