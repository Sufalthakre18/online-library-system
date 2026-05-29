import { createSlice } from '@reduxjs/toolkit';
import { BOOKS } from '../data/booksData';

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    booksList: (() => {
      try {
        const saved = localStorage.getItem('libraryBooks');
        return saved ? JSON.parse(saved) : BOOKS;
      } catch {
        return BOOKS;
      }
    })(),
  },
  reducers: {
    // Add new book to the BEGINNING of the list
    addBook: (state, action) => {
      state.booksList.unshift(action.payload);
      localStorage.setItem('libraryBooks', JSON.stringify(state.booksList));
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;