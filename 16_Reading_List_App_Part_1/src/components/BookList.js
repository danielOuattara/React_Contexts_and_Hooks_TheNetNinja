
/* BOOKLIST CLASS COMPONENT 
-------------------------------*/

// import { Component } from 'react'
// import { BookContext } from './../contexts/BookContext';

// export default class Booklist extends Component {
//     render() {
//         return (
//             <BookContext.Consumer>
//                 {(bookContext) => {
//                     const { books } = bookContext;
//                     return ( 
//                         <div className="navbar" >
//                             <h1>Reading List</h1>
//                             <p> You have {books.length} books in your library</p>
//                         </div>
//                     );
//                 }}
//             </BookContext.Consumer>
//         );
//     }
// }


/* BOOKLIST FUCNTION COMPONENT 
-----------------------------------*/

import React, { useContext } from 'react'
import { BookContext } from './../contexts/BookContext';

const Booklist = () => {
    const { books } = useContext(BookContext);
    return ( 
        <div className="navbar" >
            <h1>Reading List</h1>
            <p> You have {books.length} books in your library</p>
        </div>
     );
}
 
export default Booklist;