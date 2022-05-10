/* BookContext using class component ! 
--------------------------------------------*/

// import {Component, createContext} from "react";
// import { v1 as uuidv1 } from 'uuid';

// export const BookContext = createContext();

// export class BookContextProvider extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             books: [
//                 {title: "The way of King", author:"Rod Stewart", id: uuidv1() },
//                 {title: "The name of the wind", author:"Big Joe", id: uuidv1() },
//                 {title: "The final empire", author:" Lemon Ice", id: uuidv1() },
//             ]
//         }

//         this.handleAddBook = this.handleAddBook.bind(this)
//         this.handleRemoveBook = this.handleAddBook.bind(this)
//     }

//     handleAddBook = (title, author) => {
//         this.setState([...this.state.books, {title, author, id: uuidv1()}])
//     };

//     handleRemoveBook = (id) => {
//         this.setState(this.state.books.filter((book) => book.id !== id))
//     };

//     render() {
//         return (
//             <BookContext.Provider value= {{...this.state, handleAddBook: this.handleAddBook, handleRemoveBook:this.handleRemoveBook}}>
//                 {this.props.children}
//             </BookContext.Provider>
//         );
//     }
// }
// export default BookContextProvider;

/* BookContext using function component ! 
--------------------------------------------*/

import { createContext, useState } from "react";
import { v1 as uuidv1 } from "uuid";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: "The way of King", author: "Rod Stewart", id: uuidv1() },
    { title: "The name of the wind", author: "Big Joe", id: uuidv1() },
    { title: "The final empire", author: " Lemon Ice", id: uuidv1() },
  ]);

  const handleAddBook = (title, author) => {
    setBooks([...books, { title, author, id: uuidv1() }]);
  };

  const handleRemoveBook = (id) => {
    const keptBooks = books.filter((book) => book.id !== id);
    setBooks(keptBooks);
  };

  return (
    <BookContext.Provider value={{ books, handleAddBook, handleRemoveBook }}>
      {props.children}
    </BookContext.Provider>
  );
};
export default BookContextProvider;
