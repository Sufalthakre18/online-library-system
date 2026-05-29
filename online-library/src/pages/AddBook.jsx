// ── Add Book Page ─────────────────────────────────────────────────────────────
// Form with full validation → dispatches addBook to Redux → redirects to /books

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../store/booksSlice';
import { CATEGORIES } from '../data/booksData';

const EMPTY_FORM = {
  title: '', author: '', category: '',
  description: '', rating: '', pages: '', year: '',
};

const COVER_GRADIENTS = [
  'from-indigo-600 to-indigo-800', 'from-cyan-600 to-cyan-800',
  'from-violet-600 to-purple-800', 'from-amber-500 to-orange-700',
  'from-emerald-600 to-emerald-800', 'from-pink-600 to-rose-800',
  'from-red-700 to-red-900',        'from-teal-500 to-teal-700',
];

function AddBook() {
  const dispatch  = useDispatch();
  const navigate  = useNavigate();
  const [form, setForm]         = useState(EMPTY_FORM);
  const [errors, setErrors]     = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Update field and clear its error
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: '' }));
  };

  // Validate all fields — returns error object
  const validate = () => {
    const e   = {};
    const yr  = new Date().getFullYear();
    const r   = parseFloat(form.rating);
    const pg  = parseInt(form.pages);
    const y   = parseInt(form.year);

    if (!form.title.trim() || form.title.trim().length < 2)
      e.title = 'Title is required (min 2 characters).';
    if (!form.author.trim() || form.author.trim().length < 2)
      e.author = 'Author is required (min 2 characters).';
    if (!form.category)
      e.category = 'Please select a category.';
    if (!form.description.trim() || form.description.trim().length < 20)
      e.description = 'Description must be at least 20 characters.';
    if (!form.rating || isNaN(r) || r < 1 || r > 5)
      e.rating = 'Rating must be a number between 1 and 5.';
    if (!form.pages || isNaN(pg) || pg < 1)
      e.pages = 'Enter a valid number of pages.';
    if (!form.year || isNaN(y) || y < 1000 || y > yr)
      e.year = `Enter a valid year (1000–${yr}).`;

    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Build new book object
    const newBook = {
      id:          Date.now(),
      title:       form.title.trim(),
      author:      form.author.trim(),
      category:    form.category,
      description: form.description.trim(),
      rating:      parseFloat(parseFloat(form.rating).toFixed(1)),
      pages:       parseInt(form.pages),
      year:        parseInt(form.year),
      coverBg:     COVER_GRADIENTS[Math.floor(Math.random() * COVER_GRADIENTS.length)],
      popular:     false,
    };

    dispatch(addBook(newBook));   // → added to BEGINNING of list in Redux
    setSubmitted(true);
    setTimeout(() => navigate('/books'), 1200);
  };

  // Shared input class helper
  const inputCls = (field) =>
    `w-full px-3.5 py-2.5 rounded-lg border-2 text-sm font-sans bg-cream text-gray-800 outline-none transition-all focus:bg-white ${
      errors[field]
        ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100'
        : 'border-gray-200 focus:border-forest-800 focus:ring-2 focus:ring-forest-800/10'
    }`;

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">

      {/* Header */}
      <div className="mb-8">
        <h1 className="font-serif text-4xl font-bold text-gray-800 mb-1">Add a New Book</h1>
        <p className="text-gray-400 text-sm">Fill in the details below to add to the library.</p>
      </div>

      {/* Success toast */}
      {submitted && (
        <div className="flex items-center gap-3 bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg mb-6 text-sm font-medium">
          ✅ Book added! Redirecting to Browse Books...
        </div>
      )}

      {/* Form card */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
        <form onSubmit={handleSubmit} noValidate>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

            {/* Title */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold uppercase tracking-wide text-gray-600">
                Book Title <span className="text-red-500">*</span>
              </label>
              <input name="title" value={form.title} onChange={handleChange}
                placeholder="e.g. The Great Gatsby"
                className={inputCls('title')} />
              {errors.title && <p className="text-xs text-red-500">⚠ {errors.title}</p>}
            </div>

            {/* Author */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold uppercase tracking-wide text-gray-600">
                Author <span className="text-red-500">*</span>
              </label>
              <input name="author" value={form.author} onChange={handleChange}
                placeholder="e.g. F. Scott Fitzgerald"
                className={inputCls('author')} />
              {errors.author && <p className="text-xs text-red-500">⚠ {errors.author}</p>}
            </div>

            {/* Category */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold uppercase tracking-wide text-gray-600">
                Category <span className="text-red-500">*</span>
              </label>
              <select name="category" value={form.category} onChange={handleChange}
                className={inputCls('category')}>
                <option value="">Select a category...</option>
                {CATEGORIES.map((c) => (
                  <option key={c.label} value={c.label}>{c.emoji} {c.label}</option>
                ))}
              </select>
              {errors.category && <p className="text-xs text-red-500">⚠ {errors.category}</p>}
            </div>

            {/* Rating */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold uppercase tracking-wide text-gray-600">
                Rating (1–5) <span className="text-red-500">*</span>
              </label>
              <input name="rating" type="number" step="0.1" min="1" max="5"
                value={form.rating} onChange={handleChange}
                placeholder="e.g. 4.5"
                className={inputCls('rating')} />
              {errors.rating && <p className="text-xs text-red-500">⚠ {errors.rating}</p>}
            </div>

            {/* Pages */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold uppercase tracking-wide text-gray-600">
                Pages <span className="text-red-500">*</span>
              </label>
              <input name="pages" type="number" min="1"
                value={form.pages} onChange={handleChange}
                placeholder="e.g. 320"
                className={inputCls('pages')} />
              {errors.pages && <p className="text-xs text-red-500">⚠ {errors.pages}</p>}
            </div>

            {/* Year */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold uppercase tracking-wide text-gray-600">
                Publication Year <span className="text-red-500">*</span>
              </label>
              <input name="year" type="number" min="1000" max={new Date().getFullYear()}
                value={form.year} onChange={handleChange}
                placeholder={`e.g. ${new Date().getFullYear()}`}
                className={inputCls('year')} />
              {errors.year && <p className="text-xs text-red-500">⚠ {errors.year}</p>}
            </div>

            {/* Description — full width */}
            <div className="flex flex-col gap-1.5 sm:col-span-2">
              <label className="text-xs font-bold uppercase tracking-wide text-gray-600">
                Description <span className="text-red-500">*</span>
              </label>
              <textarea name="description" rows={4}
                value={form.description} onChange={handleChange}
                placeholder="Write a brief description (at least 20 characters)..."
                className={`${inputCls('description')} resize-y min-h-24`} />
              {errors.description && <p className="text-xs text-red-500">⚠ {errors.description}</p>}
            </div>

          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 mt-7">
            <button
              type="button"
              onClick={() => { setForm(EMPTY_FORM); setErrors({}); }}
              className="px-5 py-2.5 border-2 border-gray-200 text-gray-600 text-sm font-medium rounded-lg hover:border-gray-400 transition-all"
            >
              Reset
            </button>
            <button
              type="submit"
              disabled={submitted}
              className="px-6 py-2.5 bg-gold-400 text-forest-800 text-sm font-semibold rounded-lg hover:bg-gold-300 transition-all disabled:opacity-60"
            >
              {submitted ? '✅ Added!' : '+ Add Book to Library'}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default AddBook;