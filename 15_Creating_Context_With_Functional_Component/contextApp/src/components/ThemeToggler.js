/* METHOD 1 : USE 'static contextType' IN CLASS COMPONENT (ONLY)
------------------------------------------------------------------*/

// import React from "react";
// import { ThemeContext } from "./../contexts/ThemeContext";

// class ThemeToggler extends React.Component {
//     static contextType = ThemeContext

//     render() {
//        const  {handleThemeToggle} = this.context;
//         return (
//             <button onClick={handleThemeToggle}> Click to toggle theme</button>);
//     }
// }

// export default ThemeToggler;

// METHOD 2 -------------------

/* METHOD 2 : USE 'ThemeContext.Consumer' IN CLASS COMPONENT
------------------------------------------------------------------*
// import React from "react";
// import { ThemeContext } from "./../contexts/ThemeContext";

// class ThemeToggler extends React.Component {  
//     render() {
//         return (
//             <ThemeContext.Consumer>
//                 {(context) => {
//                     const {handleThemeToggle} = context;
//                     return(
//                         <button onClick={handleThemeToggle}> Click to toggle theme</button>
//                     );
//                 }}
//             </ThemeContext.Consumer>
//         );
//     }
// }
 
// export default ThemeToggler;




/* METHOD 3 :  Convert ThemeToggler to function component and insert useContext to get data 
--------------------------------------------------------------------------------------------*/

import { useContext } from "react";
import { ThemeContext } from "./../contexts/ThemeContext";

const ThemeToggler = () => {
  const { handleThemeToggler } = useContext(ThemeContext);
  return (
    <button onClick={handleThemeToggler}>
      {" "}
      Click here to toggle the theme{" "}
    </button>
  );
};

export default ThemeToggler;
