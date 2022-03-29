// import { Component } from "react";
// import { ThemeContext } from "../contexts/ThemeContext";

// class ThemeToggler extends Component {
//   static contextType = ThemeContext
//   render() {
//     return <button onClick={this.context.toggleTheme}>Toogle Theme</button>;
//   }
// }

// export default ThemeToggler;

//-----------------------------------------------------------------------

import { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class ThemeToggler extends Component {
  static contextType = ThemeContext;
  render() {
    return (
      <ThemeContext.Consumer>
        {(context) => (
          <button onClick={context.toggleTheme}>Toogle Theme</button>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default ThemeToggler;
