
import React from 'react';

export const ThemeContext =  React.createContext();

class ThemeContextProvider extends React.Component {
    state = {
        isLightTheme: true,
        light: { syntax: '#555', ui:'#ddd', bg: '#eee' },
        dark: { syntax: '#ddd',  ui:'#333', bg: '#555' },
    }

    handleThemeToggle = () => {
        this.setState({isLightTheme: !this.state.isLightTheme})
    }

    render() { 
        return (
            <ThemeContext.Provider value={{...this.state, handleThemeToggle: this.handleThemeToggle}}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}
 
export default ThemeContextProvider;

//------------------------------------------------------------------------------------

/* ThemeContext conveted to function component */

// import React, { useState } from 'react';

// export const ThemeContext =  React.createContext();
// const ThemeContextProvider = (props) => {
//     const[themeData, setTheme] = useState({
//         isLightTheme: true,
//         light: { syntax: '#555', ui:'#ddd', bg: '#eee' },
//         dark: { syntax: '#ddd',  ui:'#333', bg: '#555' },
//     });

//     const handleThemeToggler = () => {
//         setTheme( isLightTheme =>  !isLightTheme )
//     }

//     return (
//         <ThemeContext.Provider value={{...themeData, handleThemeToggler: handleThemeToggler}}>
//             {props.children}
//         </ThemeContext.Provider>
//     )
// }

// export default ThemeContextProvider;
