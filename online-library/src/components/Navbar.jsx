import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-forest-800 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3 sm:h-16">

          {/* Brand */}
          <NavLink
            to="/"
            className="flex items-center justify-center sm:justify-start gap-2.5 no-underline mb-3 sm:mb-0"
          >
            <span className="text-2xl">📚</span>

            <span className="font-serif text-lg sm:text-xl font-bold text-gold-400 tracking-wide text-center sm:text-left">
              Online Library
            </span>
          </NavLink>

          {/* Nav Links */}
          <ul className="flex flex-wrap items-center justify-center sm:justify-end gap-2 list-none m-0 p-0">

            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `text-sm font-medium px-3 sm:px-4 py-2 rounded-lg transition-all no-underline ${
                    isActive
                      ? 'text-slate-700 bg-white/15'
                      : 'text-slate-700/70 hover:text-slate-700 '
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
                  `text-sm font-medium px-3 sm:px-4 py-2 rounded-lg transition-all no-underline ${
                    isActive
                      ? 'text-slate-700 bg-white/15'
                      : 'text-slate-700 '
                  }`
                }
              >
                Browse Books
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/add-book"
                className="text-sm font-semibold px-3 sm:px-4 py-2 rounded-lg bg-gold-400 text-forest-800 hover:bg-gold-300 transition-all no-underline"
              >
                + Add Book
              </NavLink>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;