import { useState, createContext } from "react";

export const BookContext = createContext();

function BookContextProvider(props) {
  const [books, setBooks] = useState([
    { title: "The way of King", id: 1 },
    { title: "Name of the wind", id: 2 },
    { title: "The final empire", id: 3 },
  ]);
  return (
    <BookContext.Provider value={[...books]}>
      {props.children}
    </BookContext.Provider>
  );
}

export default BookContextProvider;
