import React from "react";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import ThemeContextProvider from "./contexts/ThemeContext";
import ThemeToggler from "./components/ThemeToggler";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <ThemeToggler />
        <Navbar />
        <BookList />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
