// src/redux/reducers/bookReducer.js
const initialState = {
    books: [],
    myBooks: [],
    loading: false,
  };
  
  const bookReducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_BOOKS_LOADING":
        return { ...state, loading: true };
      case "FETCH_BOOKS_SUCCESS":
        return { ...state, books: action.payload, loading: false };
      case "SET_MY_BOOKS":
        return { ...state, myBooks: action.payload }; // Set myBooks from Firebase
      case "ADD_TO_MY_BOOKS":
        return { ...state, myBooks: [...state.myBooks, action.payload] };
      case "UPDATE_BOOK_STATUS":
        return {
          ...state,
          myBooks: state.myBooks.map((book) =>
            book.id === action.payload.bookId ? { ...book, status: action.payload.status } : book
          ),
        };
      case "UPDATE_BOOK_RATING":
        return {
          ...state,
          myBooks: state.myBooks.map((book) =>
            book.id === action.payload.bookId ? { ...book, rating: action.payload.rating } : book
          ),
        };
      default:
        return state;
    }
  };
  
  export default bookReducer;