import React, { Component } from "react";
import { ThemeContext } from "./../contexts/ThemeContext";

class Navbar extends Component {
  render() {
    return (
      // This technic is available both for function and class components
      // and can also consume multiple context in one component
      <ThemeContext.Consumer>
        {(context) => {
          const { isLightTheme, light, dark } = context;
          const theme = isLightTheme ? light : dark;
          return (
            <nav style={{ background: theme.ui, color: theme.syntax }}>
              <h1>Context App</h1>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </nav>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Navbar;
