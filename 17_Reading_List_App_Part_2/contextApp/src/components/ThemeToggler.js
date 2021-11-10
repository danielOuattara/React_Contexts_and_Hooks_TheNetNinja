
// METHOD 1 -------------------

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


// import React from "react";
// import { ThemeContext } from "./../contexts/ThemeContext";

// class ThemeToggler extends React.Component {  
//     render() {
//         return (
//             <ThemeContext.Consumer>
//                 {(context) => {
//                     const  {handleThemeToggle} = context;
//                     return(
//                         <button onClick={handleThemeToggle}> Click to toggle theme</button>
//                     );
//                 }}
//             </ThemeContext.Consumer>
//         );
//     }
// }
 
// export default ThemeToggler;

//------------------------------------------------------------------------------------

/* Convert ThemeToggler to function component and insert useContext to get data */

// method 3 -----------------------------

import React, { useContext } from "react";
import { ThemeContext } from "./../contexts/ThemeContext";

const ThemeToggler = () => { 
        const  { handleThemeToggle }  = useContext(ThemeContext);
        return(
            <button onClick={handleThemeToggle}> Click here to toggle the theme </button>
        );
}
 
export default ThemeToggler;