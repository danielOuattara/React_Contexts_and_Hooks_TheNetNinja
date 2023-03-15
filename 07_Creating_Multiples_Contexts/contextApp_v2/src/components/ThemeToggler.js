// import { Component } from "react";
// import { ThemeContext } from "../contexts/ThemeContext";

// class ThemeToggler extends Component {
//   static contextType = ThemeContext
//   render() {
//     return <button onClick={this.context.toggleTheme}>Toggle Theme</button>;
//   }
// }

// export default ThemeToggler;

//-----------------------------------------------------------------------

import { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class ThemeToggler extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(context) => (
          <button onClick={context.toggleTheme}>Toggle Theme</button>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default ThemeToggler;
