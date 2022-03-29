// import React, { Component } from "react";
// import { AuthContext } from "../contexts/AuthContext";
// import { ThemeContext } from "../contexts/ThemeContext";

// class Navbar extends Component {
//   render() {
//     return (
//       <AuthContext.Consumer>
//         {(context) => {
//           const { isAuthenticated, toggleAuth } = context;
//           return (
//             <>
//               <ThemeContext.Consumer>
//                 {(context) => {
//                   const { isLightTheme, light, dark } = context;
//                   const theme = isLightTheme ? light : dark;
//                   return (
//                     <nav style={{ background: theme.ui, color: theme.syntax }}>
//                       <h1>Context App</h1>
//                       {isAuthenticated ? (
//                         <h3>User is authenticated</h3>
//                       ) : (
//                         <h3>User is Not authenticate:</h3>
//                       )}
//                       <button onClick={toggleAuth}>
//                         {" "}
//                         Toggle Authentication
//                       </button>
//                       <ul>
//                         <li>Home</li>
//                         <li>About</li>
//                         <li>Contact</li>
//                       </ul>
//                     </nav>
//                   );
//                 }}
//               </ThemeContext.Consumer>
//             </>
//           );
//         }}
//       </AuthContext.Consumer>
//     );
//   }
// }

// export default Navbar;

//----------------------------------------------------------------------

// import { Component, useContext } from "react";
// import { AuthContext } from "../contexts/AuthContext";
// import { ThemeContext } from "../contexts/ThemeContext";

// class Navbar extends Component {
//   render() {
//     return (
//       <AuthContext.Consumer>
//         {(authContext) => (
//           <ThemeContext.Consumer>
//             {(themeContext) => {
//               const { isAuthenticated, toggleAuth } = authContext;
//               const { isLightTheme, light, dark } = themeContext;
//               const theme = isLightTheme ? light : dark;
//               return (
//                 <>
//                   <nav style={{ background: theme.ui, color: theme.syntax }}>
//                     <button onClick={toggleAuth}> Toggle Authentication</button>
//                     <h1>Context App</h1>
//                     {isAuthenticated ? (
//                       <h3>User is authenticated</h3>
//                     ) : (
//                       <h3>User is Not authenticate:</h3>
//                     )}
//                     <ul>
//                       <li>Home</li>
//                       <li>About</li>
//                       <li>Contact</li>
//                     </ul>
//                   </nav>
//                 </>
//               );
//             }}
//           </ThemeContext.Consumer>
//         )}
//       </AuthContext.Consumer>
//     );
//   }
// }

// export default Navbar;

//-------------------------------------------------------------------------------

import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { ThemeContext } from "../contexts/ThemeContext";

function Navbar() {
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <>
      <nav style={{ background: theme.ui, color: theme.syntax }}>
        <button onClick={toggleAuth}> Toggle Authentication</button>
        <h1>Context App</h1>
        {isAuthenticated ? (
          <h3>User is authenticated</h3>
        ) : (
          <h3>User is Not authenticate:</h3>
        )}
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
