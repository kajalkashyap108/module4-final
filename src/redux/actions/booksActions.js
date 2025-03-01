// src/redux/actions/booksActions.js
import { databaseURL } from "../../firebase/firebaseConfig";

export const fetchBooks = () => async (dispatch) => {
    dispatch({ type: "FETCH_BOOKS_LOADING" });
    try {
      const response = await fetch(`${databaseURL}/books.json`);
      const data = await response.json();
      console.log("Fetched books:", data); // Debug to verify imageUrl is included
      const booksArray = data ? Object.keys(data).map((key) => ({ id: key, ...data[key] })) : [];
      dispatch({ type: "FETCH_BOOKS_SUCCESS", payload: booksArray });
    } catch (error) {
      console.error("Fetch books error:", error);
      dispatch({ type: "FETCH_BOOKS_SUCCESS", payload: [] });
    }
  };

export const fetchMyBooks = (userEmail) => async (dispatch) => {
  try {
    const sanitizedEmail = userEmail.replace(/\./g, ","); // Firebase keys can't contain dots
    const response = await fetch(`${databaseURL}/users/${sanitizedEmail}/myBooks.json`);
    const data = await response.json();
    const myBooksArray = data ? Object.keys(data).map((key) => ({ id: key, ...data[key] })) : [];
    dispatch({ type: "SET_MY_BOOKS", payload: myBooksArray });
  } catch (error) {
    console.error("Fetch myBooks error:", error);
    dispatch({ type: "SET_MY_BOOKS", payload: [] });
  }
};

export const addToMyBooks = (book, userEmail) => async (dispatch) => {
  const sanitizedEmail = userEmail.replace(/\./g, ",");
  const bookWithDefaults = { ...book, status: "Want to Read", rating: 0 };
  dispatch({ type: "ADD_TO_MY_BOOKS", payload: bookWithDefaults });
  await fetch(`${databaseURL}/users/${sanitizedEmail}/myBooks/${book.id}.json`, {
    method: "PUT",
    body: JSON.stringify(bookWithDefaults),
  });
};

export const updateBookStatus = (bookId, status, userEmail) => async (dispatch) => {
  dispatch({ type: "UPDATE_BOOK_STATUS", payload: { bookId, status } });
  const sanitizedEmail = userEmail.replace(/\./g, ",");
  await fetch(`${databaseURL}/users/${sanitizedEmail}/myBooks/${bookId}.json`, {
    method: "PATCH",
    body: JSON.stringify({ status }),
  });
};

export const updateBookRating = (bookId, rating, userEmail) => async (dispatch) => {
  dispatch({ type: "UPDATE_BOOK_RATING", payload: { bookId, rating } });
  const sanitizedEmail = userEmail.replace(/\./g, ",");
  await fetch(`${databaseURL}/users/${sanitizedEmail}/myBooks/${bookId}.json`, {
    method: "PATCH",
    body: JSON.stringify({ rating }),
  });
};