import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-forest-800 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">

        {/* Brand */}
        <NavLink to="/" className="flex items-center gap-2.5 no-underline">
          <span className="text-2xl">📚</span>
          <span className="font-serif text-xl font-bold text-gold-400 tracking-wide">
            Bibliotheca
          </span>
        </NavLink>

        {/* Nav Links */}
        <ul className="flex items-center gap-1 list-none m-0 p-0">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `text-sm font-medium px-4 py-2 rounded-lg transition-all no-underline ${
                  isActive
                    ? 'text-white bg-white/15'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/books"
              className={({ isActive }) =>
                `text-sm font-medium px-4 py-2 rounded-lg transition-all no-underline ${
                  isActive
                    ? 'text-white bg-white/15'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`
              }
            >
              Browse Books
            </NavLink>
          </li>
          <li>
            {/* Add Book — accent button style */}
            <NavLink
              to="/add-book"
              className="text-sm font-semibold px-4 py-2 rounded-lg bg-gold-400 text-forest-800 hover:bg-gold-300 transition-all no-underline ml-2"
            >
              + Add Book
            </NavLink>
          </li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;