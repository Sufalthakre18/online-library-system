//  BookCard Component 

import { Link } from 'react-router-dom';
import { getStars, getCategory } from '../data/booksData';

function BookCard({ book }) {
  const { id, title, author, category, rating, coverBg } = book;
  const cat = getCategory(category);

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col overflow-hidden">

      {/* Colored cover */}
      <div className={`h-44 bg-gray-500 ${coverBg} flex items-center justify-center text-white text-5xl font-serif font-bold relative`}>
        <span className="relative z-10">{title.charAt(0)}</span>
        <div className="absolute inset-0 bg-white/5" />
      </div>

      {/* Card body */}
      <div className="p-4 flex flex-col gap-1.5 flex-1">
        {/* Category badge */}
        <span className={`self-start text-xs font-bold uppercase tracking-wide px-2 py-0.5 rounded ${cat.bg} ${cat.text}`}>
          {cat.emoji} {category}
        </span>

        {/* Title */}
        <h3 className="font-serif text-base font-semibold text-gray-800 leading-snug line-clamp-2">
          {title}
        </h3>

        {/* Author */}
        <p className="text-xs text-gray-400">by {author}</p>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-auto pt-1 text-amber-400 text-sm font-semibold">
          <span>{getStars(rating)}</span>
          <span className="text-gray-600 font-normal">{rating}</span>
        </div>
      </div>

      {/* Footer link */}
      <div className="px-4 pb-4">
        <Link
          to={`/books/details/${id}`}
          className="block w-full text-center text-sm font-medium bg-forest-800 text-white py-2 rounded-lg hover:bg-forest-700 transition-colors no-underline"
        >
          View Details →
        </Link>
      </div>

    </div>
  );
}

export default BookCard;