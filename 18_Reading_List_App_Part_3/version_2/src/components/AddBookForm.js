// import { useState, useContext } from "react";
// import { BookContext } from "../contexts/BookContext";

// function AddBookForm() {
//   const { addBook } = useContext(BookContext);

//   const [book, setBook] = useState({
//     title: "",
//     author: "",
//   });

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     addBook(book.title, book.author);
//     setBook(() => ({ title: "",author: ""}));
//   };
//   console.log(book)

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="">Title: </label>
//         <input
//           type="text"
//           name=""
//           id=""
//           value={book.title}
//           onChange={(event) => setBook({ ...book, title: event.target.value })}
//         />
//         <label htmlFor="">Author: </label>
//         <input
//           type="text"
//           name=""
//           id=""
//           value={book.author}
//           onChange={(event) => setBook({ ...book, author: event.target.value })}
//         />
//         <input type="submit" value="Add Book" />
//       </form>
//     </div>
//   );
// }

// export default AddBookForm;


//-----------------------------------------------------------------------

import { useState, useContext } from "react";
import { BookContext } from "../contexts/BookContext";

function AddBookForm() {
  const { addBook } = useContext(BookContext);

  const [book, setBook] = useState({
    title: "",
    author: "",
  });

  const handleChange =(field, event) => {
    setBook((name) => ({ ...name, [field]: event.target.value }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    addBook(book.title, book.author);
    setBook(() => ({ title: "", author: "" }));
  };
  console.log(book);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Title: </label>
        <input
          type="text"
          name=""
          id=""
          value={book.title}
          onChange={(event => handleChange("title", event))}
        />
        <label htmlFor="">Author: </label>
        <input
          type="text"
          name=""
          id=""
          value={book.author}
          onChange={(event) => handleChange("author", event)}
        />
        <input type="submit" value="Add Book" />
      </form>
    </div>
  );
}

export default AddBookForm;
