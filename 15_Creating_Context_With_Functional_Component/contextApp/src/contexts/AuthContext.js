/* CLASS COMPONENT
---------------------*/

// import {createContext, Component} from 'react';

// export const AuthContext = createContext();
// export default class AuthContextProvider extends Component {
//     state = {
//         isAuthenticated: false,
//     }

//     handleAuthToggle = () => {
//         this.setState({isAuthenticated: !this.state.isAuthenticated})
//         console.log(this.state.isAuthenticated);
//     }

//     render() {
//         return (
//             <AuthContext.Provider value={{...this.state, handleAuthToggle: this.handleAuthToggle}}>
//                 {this.props.children}
//             </AuthContext.Provider>
//         );
//     }
// }

/* FUNCTION COMPONENT
----------------------------*/

import { useState, createContext } from "react";
export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const handleAuthToggle = () => {
    setIsAuthenticated((isAuthenticated) => !isAuthenticated);
    console.log(isAuthenticated);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, handleAuthToggle }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
