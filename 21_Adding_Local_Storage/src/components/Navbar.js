/* NAVBAR CLASS COMPONENT 
---------------------------*/

// import React, { Component } from 'react';
// import { AuthContext } from '../contexts/AuthContext';
// import { ThemeContext } from './../contexts/ThemeContext';

// class Navbar extends Component {
//     render() {    
//         return (
//             <AuthContext.Consumer>
//                 { (authContext) => (
//                     <ThemeContext.Consumer>
//                         {(themeContext) => {
//                             const { isAuthenticated, handleAuthToggle} = authContext;   
//                             const { isLightTheme, light, dark} = themeContext;
//                             const theme = isLightTheme ? light : dark ;
//                             return (
//                                 <>
//                                    <h1>Context App</h1>
//                                     {isAuthenticated ? <h3>User is authenticated</h3> : <h3>User is Not authenticate:</h3>}
//                                     <button onClick={handleAuthToggle}> Toggle Authentication</button>
//                                     <nav style= {{background: theme.ui, color: theme.syntax}}>
//                                         <ul>
//                                             <li>Home</li>
//                                             <li>About</li>
//                                             <li>Contact</li>
//                                         </ul>
//                                     </nav>                                            
//                                 </>
//                             );
//                         }}
//                     </ThemeContext.Consumer>
//                 )}
//             </AuthContext.Consumer>
//         );
//     }
// }
 
// export default Navbar;


/* Convert Navbar to function component and insert useContext to get data 
--------------------------------------------------------------------------*/

import { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const Navbar = () => {
        const {books} = useContext(BookContext ); 
        return (
            <div className="navbar">
                <h1>Reading List </h1>
                <p> Curently you have { books.length} books to read </p>                         
            </div>
        );
}
export default Navbar;



