// ── 404 Not Found Page 
// // No Navbar on this page (by assignment requirement)
import { Link, useLocation } from 'react-router-dom';

function NotFound() {
  const location = useLocation();   // access the current URL

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-6">
      <div className="text-center max-w-md">

        {/* Icon */}
        <div className="text-7xl mb-4">🔎</div>

        {/* 404 number */}
        <h1 className="font-serif text-9xl font-bold text-forest-800 leading-none mb-2">
          404
        </h1>

        <h2 className="font-serif text-2xl font-semibold text-gray-700 mb-3">
          Page Not Found
        </h2>

        {/* Show the invalid URL */}
        <div className="inline-block bg-gray-100 border border-gray-200 text-red-500 font-mono text-sm px-4 py-2 rounded-lg mb-5 break-all">
          {location.pathname}
        </div>

        <p className="text-gray-400 text-base leading-relaxed mb-8">
          The page you're looking for doesn't exist in our library.
          It may have been removed, renamed, or never existed.
        </p>

        {/* Link back to Home */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-7 py-3 bg-forest-800 text-white font-semibold text-base rounded-lg hover:bg-forest-700 transition-all no-underline"
        >
          🏠 Back to Home
        </Link>

      </div>
    </div>
  );
}

export default NotFound;