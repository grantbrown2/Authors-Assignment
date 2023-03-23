import './App.css';
import {Routes, Route} from 'react-router-dom';
import ListAuthors from './components/ListAuthors';
import AddAuthor from './components/AddAuthor';
import UpdateAuthor from './components/UpdateAuthor';

function App() {
  return (
    <div className="App">
      <h1>Favorite Authors</h1>
      <Routes>
        <Route path='/' element={<ListAuthors/>} />
        <Route path='/authors/new' element={<AddAuthor />} />
        <Route path='/authors/edit/:id' element={<UpdateAuthor />} />
      </Routes>
    </div>
  );
}

export default App;
