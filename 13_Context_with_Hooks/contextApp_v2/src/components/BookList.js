// import React, { Component, useContext } from "react";
// import { ThemeContext } from "../contexts/ThemeContext";

// export default class BookList extends Component {
//   static contextType = ThemeContext;
//   render() {
//     const { isLightTheme, light, dark } = this.context;
//     const theme = isLightTheme ? light : dark;
//     return (
//       <div className="book-list" style={{background: theme.bg, color: theme.syntax}}>
//         <ul>
//           <li style={{background: theme.ui}}>The way of King</li>
//           <li style={{background: theme.ui}}>The name of the wind</li>
//           <li style={{background: theme.ui}}>The final empire</li>
//         </ul>
//       </div>
//     );
//   }
// }

//-------------------------------------------------------------------

import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function BookList() {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <div
      className="book-list"
      style={{ background: theme.bg, color: theme.syntax }}
    >
      <ul>
        <li style={{ background: theme.ui }}>The way of King</li>
        <li style={{ background: theme.ui }}>The name of the wind</li>
        <li style={{ background: theme.ui }}>The final empire</li>
      </ul>
    </div>
  );
}

export default BookList;
