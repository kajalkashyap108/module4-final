// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import bookReducer from "./reducers/booksReducer";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    books: bookReducer,
  },
});