import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

import Navbar from './components/Navbar';

import Home from './pages/Home';
import BrowseBooks from './pages/BrowseBooks';
import BookDetails from './pages/BookDetails';
import AddBook from './pages/AddBook';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Pages with Navbar */}
        <Route
          element={<>
          <Navbar />
          <Outlet />
          <footer className="bg-forest-800 text-white/50 text-sm text-center py-5">
                © 2025 Bibliotheca
          </footer>
          </>}
        >
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<BrowseBooks />} />
          <Route path="/books/:category" element={<BrowseBooks />} />
          <Route path="/books/details/:id" element={<BookDetails />} />
          <Route path="/add-book" element={<AddBook />} />
        </Route>

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;