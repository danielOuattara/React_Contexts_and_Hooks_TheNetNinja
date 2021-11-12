
import { Component, createContext } from 'react';

export const AuthContext =  createContext();

class AuthContextProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isAuthenticate: false,
        }
    }

    handleAuthToggle = () => {
        this.setState({
            isAuthenticate: !this.state.isAuthenticate
        })
    }

    render() {
        return (
            <AuthContext.Provider value={{...this.state, handleAuthToggle: this.handleAuthToggle}}>
                {this.props.children}
            </AuthContext.Provider>
        );
    }
}

export default AuthContextProvider;
