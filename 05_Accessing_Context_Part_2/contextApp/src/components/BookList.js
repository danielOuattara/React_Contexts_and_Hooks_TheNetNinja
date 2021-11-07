import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export default class BookList extends Component {    
    render() {
        return ( // This technic is available both for function and class components
                 // and can also consume multiple context in one component
            <ThemeContext.Consumer> 
                { (context) => {
                    const { isLightTheme, light, dark} = context;
                    const theme = isLightTheme ? light : dark ;
                    return (
                        <div 
                          className="book-list" 
                          style= {{background: theme.bg, color: theme.syntax}} >
                            <ul>
                                <li style= {{background: theme.ui}}>The way of King</li>
                                <li style= {{background: theme.ui}}>The name of the wind</li>
                                <li style= {{background: theme.ui}}>The final empire</li>
                            </ul> 
                        </div>
                    );
                }}
            </ThemeContext.Consumer>
        )
    }
}
