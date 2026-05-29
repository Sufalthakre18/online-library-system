# 📚 Online Library System

A full-featured online library app built with **React 19**, **Redux Toolkit**, **React Router **, **Tailwind CSS v4**, and **Vite 8**.

---

## 🚀 Tech Stack

| Technology | Version |
|---|---|
| React | 19.x |
| Vite | 8.x |
| Tailwind CSS | **v4.x** (`@import "tailwindcss"`) |
| React Router DOM | 6.x |
| Redux Toolkit | 2.x |
| React Redux | 9.x |

---

## ⚡ How to Run

```bash
# 1. Clone / unzip the project
cd online-library

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
# → http://localhost:5173

# Build for production
npm run build
```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx        # Sticky nav — Home, Browse, Add Book
│   └── BookCard.jsx      # Reusable book card
├── data/
│   └── booksData.js      # 16 dummy books + category helpers
├── pages/
│   ├── Home.jsx          # Hero + Categories + Popular Books
│   ├── BrowseBooks.jsx   # Search + filter + grid
│   ├── BookDetails.jsx   # Full book detail view
│   ├── AddBook.jsx       # Form with validation + Redux
│   └── NotFound.jsx      # 404 — no Navbar
├── store/
│   ├── store.js          # Redux configureStore
│   └── booksSlice.js     # addBook reducer
├── App.jsx               # Routes + layout
├── main.jsx              # Entry + Redux Provider
└── index.css             # @import "tailwindcss" (v4)
```

---

## 🗺️ Routes

| Route | Page |
|---|---|
| `/` | Home |
| `/books` | Browse All |
| `/books/:category` | Browse by Category |
| `/books/details/:id` | Book Details |
| `/add-book` | Add New Book |
| `*` | 404 Not Found (no Navbar) |