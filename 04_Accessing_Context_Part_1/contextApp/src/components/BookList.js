import React, { Component } from 'react';
import { ThemeContext } from './../contexts/ThemeContext';

export default class BookList extends Component {
    static contextType = ThemeContext; // indicate what context we want to consume
    // This declaration above is only available in class component, because of 'static' declaration
    render() {
        // console.log('ThemeContext = ', ThemeContext)
        console.log("this.context = ", this.context);
        const { isLightTheme, light, dark} = this.context;
        const theme = isLightTheme ? light : dark ;

        return (
            <div
              className="book-list"
              style= {{background: theme.bg, color: theme.syntax}}>
                <ul>
                    <li style= {{background: theme.ui}}>The way of King</li>
                    <li style= {{background: theme.ui}}>The name of the wind</li>
                    <li style= {{background: theme.ui}}>The final empire</li>
                </ul>
            </div>
        );
    }
}
