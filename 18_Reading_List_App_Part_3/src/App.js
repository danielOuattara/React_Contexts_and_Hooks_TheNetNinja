import BookContextProvider from './contexts/BookContext';
import Navbar from './components/Navbar';
import Booklist from './components/BookList';
import AddingBookForm from './components/AddingBookForm';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <Booklist />
        <AddingBookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
