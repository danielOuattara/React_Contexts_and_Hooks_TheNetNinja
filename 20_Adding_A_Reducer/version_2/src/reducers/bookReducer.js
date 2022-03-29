export const bookReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return [
        ...state,
        // {
        //   title: action.book.title,
        //   author: action.book.author,
        //   id: new Date().getTime().toString(),
        // },
        {
            title: action.payload.book.title,
            author: action.payload.book.author,
            id: new Date().getTime().toString(),
          }
      ];
    case "REMOVE_BOOK":
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};
