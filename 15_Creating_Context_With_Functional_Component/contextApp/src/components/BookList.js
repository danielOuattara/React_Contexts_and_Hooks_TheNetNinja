
/* BOOKLIST CLASS COMPONENT 
-------------------------------*/

// import { Component } from 'react'
// import { ThemeContext } from './../contexts/ThemeContext'
// import { BookContext } from './../contexts/BookContext';

// export default class Booklist extends Component {
//     render() {
//         return (
//             <ThemeContext.Consumer>
//                 {(themeContext) => {
//                     const {isLightTheme, light, dark} = themeContext;
//                     const theme = isLightTheme ? light : dark;
//                     return (
//                         <BookContext.Consumer>
//                             {(bookContext) => {
//                                 const { books } = bookContext;
//                                 return ( 
//                                     <div 
//                                         className="book-list" 
//                                         style= {{background: theme.bg, color: theme.syntax}} >
//                                         <ul>
//                                             {books.map( (book) => {
//                                                 return <li key={book.id} style= {{background: theme.ui}}> {book.title}</li>
//                                             })}
//                                         </ul> 
//                                     </div>
//                                 );
//                             }}
//                         </BookContext.Consumer>
//                     );
//                 }}
//             </ThemeContext.Consumer>
//         );
//     }
// }


/* BOOKLIST FUCNTION COMPONENT 
-----------------------------------*/
import React, { useContext } from 'react'
import { BookContext } from './../contexts/BookContext';
import { ThemeContext } from './../contexts/ThemeContext'

const Booklist = () => {
    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    const { books } = useContext(BookContext);
    return ( 
        <div 
            className="book-list" 
            style= {{background: theme.bg, color: theme.syntax}} >
            <ul>
                {books.map( (book) => {
                    return <li key={book.id} style= {{background: theme.ui}}> {book.title}</li>
                })}
            </ul> 
        </div>
     );
}
 
export default Booklist;