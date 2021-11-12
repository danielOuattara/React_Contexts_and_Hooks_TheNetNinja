
import { useContext } from 'react';
import { BookContext } from './../contexts/BookContext';


const BookDetails = ({ book }) => {
    const { handleRemoveBook } = useContext(BookContext)
    return ( 
        <li onClick={() => handleRemoveBook(book.id)}>
            <div className="title"> {book.title}</div>
            <div className="author"> {book.author}</div>
        </li>
     );
}
 
export default BookDetails;