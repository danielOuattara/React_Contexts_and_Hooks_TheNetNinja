
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


import React from "react";
import { ThemeContext } from "./../contexts/ThemeContext";

class ThemeToggler extends React.Component {  
    render() {
        return (
            <ThemeContext.Consumer>
                {(context) => {
                    const  {handleThemeToggle} = context;
                    return(
                        <button onClick={handleThemeToggle}> Click to toggle theme</button>
                    );
                }}
            </ThemeContext.Consumer>
        );
    }
}
 
export default ThemeToggler;