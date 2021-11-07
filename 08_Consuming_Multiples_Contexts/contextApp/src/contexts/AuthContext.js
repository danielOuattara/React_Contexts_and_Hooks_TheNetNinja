
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