// destructuring context stage by stage

// import { Component } from "react";
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

// destructuring contexts in one inner place

// import { Component } from "react";
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
//                   <h1>Context App</h1>
//                   {isAuthenticated ? (
//                     <h3>User is authenticated</h3>
//                   ) : (
//                     <h3>User is Not authenticate:</h3>
//                   )}
//                   <button onClick={toggleAuth}> Toggle Authentication</button>

//                   <nav style={{ background: theme.ui, color: theme.syntax }}>
//                     <h1>Context App</h1>
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

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// updating to build a global context from multi single contexts
// // Why it is not working ? TODO

// import { Component } from "react";
// import { AuthContext } from "../contexts/AuthContext";
// import { ThemeContext } from "../contexts/ThemeContext";

// export default class Navbar extends Component {
//   static contextType = { ...ThemeContext, ...AuthContext };
//   // static contextType = ThemeContext;
//   render() {
//     const globalContext = { ...ThemeContext, ...AuthContext };
//     console.log("globalContext = ", globalContext);
//     console.log("this.context = ", this.context);
//     // const { isAuthenticated, toggleAuth, isLightTheme, light, dark } =
//     //   this.context;
//     // const theme = isLightTheme ? light : dark;
//     return (
//       // <nav style={{ background: theme.ui, color: theme.syntax }}>
//       //   <h1>Context App</h1>
//       //   {isAuthenticated ? (
//       //     <h3>User is authenticated</h3>
//       //   ) : (
//       //     <h3>User is Not authenticate:</h3>
//       //   )}
//       //   <button onClick={toggleAuth}> Toggle Authentication</button>
//       //   <ul>
//       //     <li>Home</li>
//       //     <li>About</li>
//       //     <li>Contact</li>
//       //   </ul>
//       // </nav>
//       <h1>Hello</h1>
//     );
//   }
// }

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
