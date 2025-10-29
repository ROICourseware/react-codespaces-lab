import './App.css';
import BookList from './books/BookList';


function App() {

  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-sm bg-light">
        <a className="navbar-brand" href="/">Book Reactions</a>
      </nav>
      <p className="container">
        Where you react to books.
      </p>
      <div className="container">
        <BookList />
      </div>

    </div>
  )
}

export default App
