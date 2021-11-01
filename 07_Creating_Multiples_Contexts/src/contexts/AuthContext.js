
import React from 'react';

export const AuthContext =  React.createContext();

class AuthContextProvider extends React.Component {
    state = {
        isAuthenticate: false,
    }

    handleAuthToggle = () => {
        this.setState({isAuthenticate: !this.state.isAuthenticate})
    }

    render() { 
        return (
            <AuthContext.Provider value={{/* ...this.state, */ handleAuthToggle: this.handleAuthToggle}}>
                {this.props.children}
            </AuthContext.Provider>
        );
    }
}
 
export default AuthContextProvider;