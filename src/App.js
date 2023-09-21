import { Route, Routes } from 'react-router-dom';
import NavBar from './components/Layout/NavBar';
import Books from './components/books/Books';
import Catagories from './components/catagories/Catagories';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Catagories />} />
      </Routes>
    </>
  );
}

export default App;
