
/* BOOKLIST FUNCTION COMPONENT 
-----------------------------------*/

import { useContext } from 'react';
import { BookContext } from './../contexts/BookContext';
import  BookDetails from './BookDetails';

const Booklist = () => {
    const { books } = useContext(BookContext);
    return books.length ?  
        (<div className="book-list" >
            <ul>
                { books.map( (book) => {
                    return (<BookDetails book={book} key={book.id} />)
                })}
            </ul>
        </div>)
        : 
        (<div className="empty"> No Books to read; free time </div>)
    ;
}
 
export default Booklist;



/* BOOKLIST CLASS COMPONENT 
-------------------------------*/

// import { Component } from 'react'
// import { BookContext } from './../contexts/BookContext';
// import  BookDetails from './BookDetails';

// export default class Booklist extends Component {
//     render() {
//         return (
//             <BookContext.Consumer>
//                 {(bookContext) => {
//                     const { books } = bookContext;
//                     return books.length ?  
//                         (<div className="book-list" >
//                             <ul>
//                                 { books.map( (book) => {
//                                     return (<BookDetails book ={book} key={book.id} />)
//                                 })}
//                             </ul>
//                         </div>)
//                         : 
//                         (<div className="empty"> No Books to read; free time </div>)
//                     ;
//                 }}
//             </BookContext.Consumer>
//         );
//     }
// }


