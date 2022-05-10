import { v1 as uuidv1 } from "uuid";

// const initialBooks = [
//   { title: "The way of King", author: "Rod Stewart", id: uuidv1() },
//   { title: "The name of the wind", author: "Big Joe", id: uuidv1() },
//   { title: "The final empire", author: " Lemon Ice", id: uuidv1() },
// ];

// localStorage.setItem("books", JSON.stringify(initialBooks))

export const bookReducer = (state /* = initialBooks */, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return [
        ...state,
        {
          title: action.book.title,
          author: action.book.author,
          id: uuidv1(),
        },
      ];
    case "REMOVE_BOOK":
      return state.filter((book) => book.id !== action.id);

    default:
      return state;
  }
};
