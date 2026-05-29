// Browse Books Page 
// - Search bar (filter by title / author)

import { useState, useMemo } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CATEGORIES } from '../data/booksData';
import BookCard from '../components/BookCard';

function BrowseBooks() {
  const { category } = useParams();       // from /books/:category
  const navigate     = useNavigate();
  const [search, setSearch] = useState('');

  const books = useSelector((state) => state.books.booksList);

  // Filter by category and/or search query
  const filteredBooks = useMemo(() => {
    let result = books;

    if (category) {
      result = result.filter(
        (b) => b.category.toLowerCase() === category.toLowerCase()
      );
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (b) =>
          b.title.toLowerCase().includes(q) ||
          b.author.toLowerCase().includes(q)
      );
    }

    return result;
  }, [books, category, search]);

  return (
    <div>

      {/* ── Header with Search  */}
      <div className="bg-slate-800 text-white py-10">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="font-serif text-4xl font-bold mb-1">
            {category ? `${category} Books` : 'All Books'}
          </h1>
          <p className="text-white/65 text-base mb-6">
            {category
              ? `Exploring our ${category} collection`
              : 'Browse the complete library collection'}
          </p>

          {/* Search bar */}
          <div className="flex gap-3 max-w-lg">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by title or author..."
              className="flex-1 px-4 py-2.5 rounded-lg bg-white/15 text-white placeholder-white/50 text-sm outline-none border border-white/20 focus:border-white/50 focus:bg-white/20 transition-all"
            />
            <button
              onClick={() => setSearch('')}
              className="px-5 py-2.5 bg-gold-400 text-forest-800 font-semibold text-sm rounded-lg hover:bg-gold-300 transition-all"
            >
              {search ? 'Clear' : 'Search'}
            </button>
          </div>
        </div>
      </div>

      {/* ── Main Content  */}
      <div className="max-w-6xl mx-auto px-6 py-8">

        {/* Category filter chips */}
        <div className="flex flex-wrap gap-2 pb-6 border-b border-gray-100 mb-6">
          <Link
            to="/books"
            className={`px-4 py-1.5 rounded-full text-sm font-medium border-2 transition-all no-underline ${
              !category
                ? 'bg-forest-800 border-slate-700 text-slate-700'
                : 'bg-white border-gray-200 text-gray-500 hover:border-slate-700 hover:text-slate-700'
            }`}
          >
            All Books
          </Link>
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.label}
              to={`/books/${cat.label}`}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border-2 transition-all no-underline ${
                category?.toLowerCase() === cat.label.toLowerCase()
                  ? 'bg-slate-700 border-slate-800 text-white'
                  : 'bg-white border-gray-200 text-gray-500 hover:border-slate-800 hover:text-slate-800'
              }`}
            >
              {cat.emoji} {cat.label}
            </Link>
          ))}
        </div>

        {/* Result count */}
        <p className="text-sm text-gray-400 mb-5">
          Showing{' '}
          <span className="font-semibold text-gray-700">{filteredBooks.length}</span>{' '}
          {filteredBooks.length === 1 ? 'book' : 'books'}
          {search && ` for "${search}"`}
          {category && ` in ${category}`}
        </p>

        {/* Books grid or empty state */}
        {filteredBooks.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
            {filteredBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="font-serif text-2xl font-semibold text-gray-700 mb-2">No books found</h3>
            <p className="text-gray-400 text-sm mb-6">
              {search
                ? `No results for "${search}". Try a different search term.`
                : `No books in ${category} yet. Be the first to add one!`}
            </p>
            <button
              onClick={() => { setSearch(''); navigate('/books'); }}
              className="inline-flex items-center px-5 py-2.5 bg-forest-800 text-white text-sm font-medium rounded-lg hover:bg-forest-700 transition-all"
            >
              Clear Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

export default BrowseBooks;