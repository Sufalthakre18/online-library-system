// ── Home Page ────────────────────────────────────────────────────────────────
// Landing page: Hero + Categories + Popular Books

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CATEGORIES } from '../data/booksData';
import BookCard from '../components/BookCard';

function Home() {
  const books = useSelector((state) => state.books.booksList);

  // Show only books marked as popular (max 8)
  const popularBooks = books.filter((b) => b.popular).slice(0, 8);

  return (
    <main>

      {/* ── Hero Section  */}
      <section className="bg-gray-500 from-slate-800 via-slate-700 to-slate-900 text-white py-20 relative overflow-hidden">
        {/* Decorative background emoji */}
        <span className="absolute right-16 top-1/2 -translate-y-1/2 text-[160px] opacity-100 pointer-events-none select-none">
          📚
        </span>

        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-xl">
            {/* Tag */}
            <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border border-gold-400/40 bg-gold-400/15 text-gold-400 mb-5">
              📚 Your Digital Library
            </span>

            {/* Headline */}
            <h1 className="text-5xl font-serif font-bold leading-tight mb-4">
              Discover Your Next{' '}
              <span className="text-gold-400">Great Read</span>
            </h1>

            <p className="text-white/80 text-lg leading-relaxed mb-8">
              Explore thousands of books across every genre. From timeless classics
              to modern masterpieces — your next favourite story is waiting.
            </p>

            {/* CTA buttons */}
            <div className="flex gap-3 flex-wrap">
              <Link
                to="/books"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gold-400 text-slate-800 font-semibold rounded-lg hover:bg-gold-300 transition-all hover:-translate-y-0.5 no-underline"
              >
                Browse Books
              </Link>
              <Link
                to="/add-book"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white/30 text-white font-medium rounded-lg hover:border-white/60 transition-all no-underline"
              >
                + Add a Book
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/*  Categories Section  */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-8">
            <h2 className="font-serif text-3xl font-bold text-gray-800">
              Browse by <span className="text-slate-700">Category</span>
            </h2>
            <div className="w-12 h-1 bg-gold-400 rounded mt-2" />
          </div>

          {/* Category cards — each links to /books/:category */}
          <div className="flex flex-wrap gap-3">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.label}
                to={`/books/${cat.label}`}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 font-medium text-sm transition-all hover:-translate-y-0.5 hover:shadow-md no-underline ${cat.bg} ${cat.text} ${cat.border}`}
              >
                <span className="text-lg">{cat.emoji}</span>
                {cat.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/*  Popular Books Section  */}
      <section className="py-14 bg-gray-50/60">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
            <div>
              <h2 className="font-serif text-3xl font-bold text-gray-800">
                Popular <span className="text-slate-700">Books</span>
              </h2>
              <div className="w-12 h-1 bg-gold-400 rounded mt-2" />
            </div>
            <Link
              to="/books"
              className="text-sm font-medium text-slate-700 border-2 border-gray-200 px-4 py-2 rounded-lg hover:border-slate-800 transition-all no-underline"
            >
              View All →
            </Link>
          </div>

          {/* Books grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
            {popularBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}

export default Home;