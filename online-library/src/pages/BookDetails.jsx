// Book Details Page
// Dynamic route: /books/details/:id

import { Link, useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getStars, getCategory } from '../data/booksData.js';

function BookDetails() {
  const { id }       = useParams();
  const navigate     = useNavigate();

  const book = useSelector((state) =>
    state.books.booksList.find((b) => b.id === Number(id))
  );

  // Book not found fallback
  if (!book) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-24 text-center">
        <div className="text-6xl mb-4">📭</div>
        <h2 className="font-serif text-3xl font-bold text-gray-700 mb-3">Book Not Found</h2>
        <p className="text-gray-400 mb-6">This book doesn't exist in our library.</p>
        <Link to="/books" className="inline-flex items-center px-5 py-2.5 bg-forest-800 text-white rounded-lg text-sm font-medium hover:bg-forest-700 transition-all no-underline">
          ← Back to Browse
        </Link>
      </div>
    );
  }

  const { title, author, category, description, rating, pages, year, coverBg } = book;
  const cat = getCategory(category);

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">

      {/* ── Breadcrumb ───────────────────────────────────────────────────── */}
      <div className="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
        <Link to="/" className="text-forest-700 hover:underline no-underline font-medium">Home</Link>
        <span>›</span>
        <Link to="/books" className="text-forest-700 hover:underline no-underline font-medium">Browse</Link>
        <span>›</span>
        <Link to={`/books/${category}`} className="text-forest-700 hover:underline no-underline font-medium">{category}</Link>
        <span>›</span>
        <span className="text-gray-600 truncate max-w-xs">{title}</span>
      </div>

      {/* ── Main Grid ────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-12 items-start">

        {/* Cover */}
        <div className={`aspect-3/4 bg-gray-300 ${coverBg} rounded-xl flex items-center justify-center text-white text-8xl font-serif font-bold shadow-xl relative overflow-hidden`}>
          <span className="relative z-10">{title.charAt(0)}</span>
          <div className="absolute inset-0 bg-white/5" />
        </div>

        {/* Content */}
        <div>
          {/* Category badge */}
          <span className={`inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded ${cat.bg} ${cat.text} mb-4`}>
            {cat.emoji} {category}
          </span>

          {/* Title */}
          <h1 className="font-serif text-4xl font-bold text-gray-800 leading-tight mb-2">{title}</h1>

          {/* Author */}
          <p className="text-gray-400 text-lg mb-5">
            by <span className="font-semibold text-forest-700">{author}</span>
          </p>

          {/* Rating */}
          <div className="flex items-center gap-3 mb-7">
            <span className="text-amber-400 text-xl tracking-wide">{getStars(rating)}</span>
            <span className="text-xl font-bold text-gray-800">{rating}</span>
            <span className="text-sm text-gray-400">/ 5.0</span>
            <span className="text-sm text-gray-400">
              ({(rating * 1000).toFixed(0)} ratings)
            </span>
          </div>

          {/* Meta cards */}
          <div className="grid grid-cols-3 gap-3 mb-7">
            {[
              { label: 'Pages',     value: pages },
              { label: 'Published', value: year  },
              { label: 'Genre',     value: category },
            ].map(({ label, value }) => (
              <div key={label} className="bg-gray-50 border border-gray-100 rounded-lg p-3 text-center">
                <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">{label}</div>
                <div className="text-sm font-semibold text-gray-700">{value}</div>
              </div>
            ))}
          </div>

          {/* Description */}
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">About This Book</p>
          <p className="text-gray-600 text-base leading-relaxed mb-8">{description}</p>

          {/* Actions */}
          <div className="flex gap-3 flex-wrap">
            {/* Back to Browse button */}
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-gray-200 text-gray-600 text-sm font-medium rounded-lg hover:border-forest-800 hover:text-forest-800 transition-all"
            >
              ← Back to Browse
            </button>
            <Link
              to={`/books/${category}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-forest-800 text-white text-sm font-medium rounded-lg hover:bg-forest-700 transition-all no-underline"
            >
              More {category} Books
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default BookDetails;