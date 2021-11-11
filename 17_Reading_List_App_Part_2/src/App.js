import React from 'react';
import BookList from './components/BookList';
import BookContextProvider from './contexts/BookContext';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <BookList />
      </BookContextProvider>
    </div>
  );
}

export default App;
