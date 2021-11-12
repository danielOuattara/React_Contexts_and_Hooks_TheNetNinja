
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
//                             const { isAuthenticated, handleAuthToggler} = authContext;   
//                             const { isLightTheme, light, dark} = themeContext;
//                             const theme = isLightTheme ? light : dark ;
//                             return (
//                                 <>
//                                    <h1>Context App</h1>
//                                     {isAuthenticated ? <h3>User is authenticated</h3> : <h3>User is Not authenticate:</h3>}
//                                     <button onClick={handleAuthToggler}> Toggle Authentication</button>
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

//--------------------------------------------------------------------------------------------

/* Convert Navbar to function component and insert useContext to get data */

import React, { useContext } from 'react';
import { AuthContext } from './../contexts/AuthContext';
import { ThemeContext } from './../contexts/ThemeContext';

const Navbar = () => {
        const { isAuthenticated, handleAuthToggler } = useContext(AuthContext); 
        const { isLightTheme, light, dark } = useContext(ThemeContext);
        const theme = isLightTheme ? light : dark ;
        return (
            <>
                <h1>Context App</h1>
                {isAuthenticated ? <h3>User is authenticated</h3> : <h3>User is Not authenticate:</h3>}
                <button onClick={handleAuthToggler}> Toggle Authentication</button>
                <nav style= {{background: theme.ui, color: theme.syntax}}>
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



