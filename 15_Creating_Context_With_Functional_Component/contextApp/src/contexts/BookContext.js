/* BookContext using class component !
--------------------------------------------*/

// import {Component, createContext} from "react";

// export const BookContext = createContext();

// export class BookContextProvider extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             books: [
//                 {title: "The way of King", id: 1} ,
//                 {title: "The name of the wind", id: 2} ,
//                 {title: "The final empire", id: 3} ,
//             ],
//         }
//     }

//     render() {
//         return (
//             <BookContext.Provider value= {this.state}>
//                 {this.props.children}
//             </BookContext.Provider>
//         );
//     }
// }
// export default BookContextProvider;

/* BookContext using function component !
--------------------------------------------*/

import { createContext, useState } from "react";

export const BookContext = createContext();

export default function BookContextProvider(props) {
  const [books, setBooks] = useState([
    { title: "The way of King", id: 1 },
    { title: "Name of the wind", id: 2 },
    { title: "The final empire", id: 3 },
    { title: "The hero of ages", id: 4 },
  ]);
  return (
    <BookContext.Provider value={{ books }}>
      {props.children}
    </BookContext.Provider>
  );
}
