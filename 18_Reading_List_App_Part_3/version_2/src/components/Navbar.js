import { useContext } from "react";
import { BookContext } from "./../contexts/BookContext";

function Navbar() {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h1>Ninja Reading List</h1>
      <p>You have {books.length} to read</p>
    </div>
  );
}

export default Navbar;
