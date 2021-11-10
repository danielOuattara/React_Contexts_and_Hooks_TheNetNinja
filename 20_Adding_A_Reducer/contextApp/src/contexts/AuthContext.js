
import React from 'react';

export const AuthContext =  React.createContext();

class AuthContextProvider extends React.Component {
    state = {
        isAuthenticated: false,
    }

    handleAuthToggler = () => {
        this.setState({isAuthenticated: !this.state.isAuthenticated})
    }

    render() { 
        return (
            <AuthContext.Provider value={{...this.state, handleAuthToggler: this.handleAuthToggler}}>
                {this.props.children}
            </AuthContext.Provider>
        );
    }
}
 
export default AuthContextProvider;



// import React, { useState } from 'react';
// export const AuthContext =  React.createContext();

// const AuthContextProvider = (props) => {

//     const [isAuthenticate, setIsAuthenticate] = useState(false);
   
//     const handleAuthToggler = () => {
//         setIsAuthenticate( isAuthenticate => !isAuthenticate)
//         console.log(isAuthenticate)
//     }

//     return (
//         <AuthContext.Provider value={{isAuthenticate, handleAuthToggler: handleAuthToggler}}>
//             {props.children}
//         </AuthContext.Provider>
            
//     );
// }

// export default AuthContextProvider;
