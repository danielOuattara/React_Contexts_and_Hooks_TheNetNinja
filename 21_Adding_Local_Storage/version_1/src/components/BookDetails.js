/* BookDetails as function component 
---------------------------------------*/

// import { useContext } from 'react';
// import { BookContext } from './../contexts/BookContext';


// const BookDetails = ({ book }) => {
//     const { handleRemoveBook } = useContext(BookContext)
//     return ( 
//         <li onClick={() => handleRemoveBook(book.id)}>
//             <div className="title"> {book.title}</div>
//             <div className="author"> {book.author}</div>
//         </li>
//      );
// }
 
// export default BookDetails;

/* BookDetails as function component + reducer 
---------------------------------------------------*/

import { useContext } from 'react';
import { BookContext } from './../contexts/BookContext';


const BookDetails = ({ book }) => {
    const { dispatch } = useContext(BookContext)

    const handleRemoveBook = () => {
        dispatch({ 
            type: 'REMOVE_BOOK',
            id: book.id
    })
    }
    return ( 
        <li onClick={handleRemoveBook}>
            <div className="title"> {book.title}</div>
            <div className="author"> {book.author}</div>
        </li>
     );
}
 
export default BookDetails;



/* BookDetails as class components 
-------------------------------------*/

// import { Component } from 'react';
// import { BookContext } from '../contexts/BookContext';

// export class BookDetails extends Component {
//     render() {
//         return (
//             <BookContext.Consumer>
//                 { (bookContext) => {
//                     const { handleRemoveBook } = bookContext;
//                     return ( 
//                         <li onClick={() => handleRemoveBook(this.props.book.id)}>
//                             <div className="title"> {this.props.book.title}</div>
//                             <div className="author"> {this.props.book.author}</div>
//                         </li>
//                     );
//                 }}

//             </BookContext.Consumer>
//         )
//     }
// }
// export default BookDetails;
