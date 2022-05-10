/* AddingBookForm as function component 
-----------------------------------------*/

// import { useState, useContext} from 'react';
// import { BookContext } from './../contexts/BookContext';

// function AddingBookForm() {
//     const { handleAddBook } = useContext(BookContext);
//     const [ title, setTitle] = useState('')
//     const [ author, setAuthor] = useState('');

//     const handleSubmit = (event) =>{
//         event.preventDefault();
//         console.log(title, author)
//         handleAddBook(title, author);
//         setTitle("");
//         setAuthor("");
//     }
//     return (
//         <form onSubmit={handleSubmit}>
//             <label htmlFor="author">
//                 Author :
//             </label>
//             <input
//                required
//                type="text"
//                onChange={(e) => setTitle(e.target.value)}
//                value= {title}
//             />

//             <label htmlFor="title">
//                 Title :
//             </label>
//             <input
//                required
//                type="text"
//                onChange={(e) => setAuthor( e.target.value) }
//                value= {author}
//             />

//             <input type="submit" value="Add Book"/>

//         </form>
//     )
// }

// export default AddingBookForm;

/* AddingBookForm as function component 
-----------------------------------------*/

// import { useState, useContext } from "react";
// import { BookContext } from "./../contexts/BookContext";

// function AddingBookForm() {
//   const { dispatch } = useContext(BookContext);
//   const [newBook, setNewBook] = useState({
//     title: "",
//     author: "",
//   });

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     dispatch({
//       type: "ADD_BOOK",
//       book: { title: newBook.title, author: newBook.author },
//     });
//     setNewBook({
//       title: "",
//       author: "",
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="">Author :</label>
//       <input
//         required
//         type="text"
//         onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
//         value={newBook.author}
//       />
//       <label htmlFor="">Title :</label>
//       <input
//         required
//         type="text"
//         onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
//         value={newBook.title}
//       />
//       <input type="submit" value="Add Book" />
//     </form>
//   );
// }
// export default AddingBookForm;

/* AddingBookForm as function component 
----------------------------------------*/

// import { useState, useContext} from 'react';
// import { BookContext } from './../contexts/BookContext';

// function AddingBookForm() {
//     const { handleAddBook } = useContext(BookContext);
//     const [ newBook, setNewBook] = useState({
//         title: "",
//         author: ""
//     });

//     const handleSubmit = (event) =>{
//         event.preventDefault();
//         console.log(newBook.title, newBook.author)
//         handleAddBook(newBook.title, newBook.author);
//         setNewBook({
//             title: "",
//             author: ""
//         });
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             <label htmlFor="">
//                 Author :
//             </label>
//             <input
//                required
//                type="text"
//                onChange={(e) => setNewBook({...newBook, author: e.target.value}) }
//                value= {newBook.author}
//             />
//             <label htmlFor="">
//                 Title :
//             </label>
//             <input
//                required
//                type="text"
//                onChange={(e) => setNewBook({...newBook, title: e.target.value}) }
//                value= {newBook.title}
//             />
//             <input type="submit" value="Add Book" />

//         </form>
//     )
// }
// export default AddingBookForm;

/* AddingBookForm as function component useReducer
---------------------------------------------------*/

import { useState, useContext } from "react";
import { BookContext } from "./../contexts/BookContext";

function AddingBookForm() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  
  const { dispatch } = useContext(BookContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: "ADD_BOOK",
      book: { title, author },
    });
    setTitle("");
    setAuthor("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="author">Title:</label>
      <input
        required
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <label htmlFor="title">Author :</label>
      <input
        required
        type="text"
        onChange={(e) => setAuthor(e.target.value)}
        value={author}
      />
      <input type="submit" value="Add Book" />
    </form>
  );
}
export default AddingBookForm;
