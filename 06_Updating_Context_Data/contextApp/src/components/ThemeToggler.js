
// METHOD 1 -------------------

// import {Component} from "react";
// import { ThemeContext } from "./../contexts/ThemeContext";

// class ThemeToggler extends Component {
//     static contextType = ThemeContext;
//     render() {
//        const {handleThemeToggler} = this.context;
//         return (
//             <button onClick={handleThemeToggler}> Click to toggle theme</button>);
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
                { (context) => {
                    const { handleThemeToggler } = context;
                    return (
                        <button onClick={handleThemeToggler}> Click to toggle theme</button>
                    );
                }}
            </ThemeContext.Consumer>
        );
    }
}

export default ThemeToggler;
