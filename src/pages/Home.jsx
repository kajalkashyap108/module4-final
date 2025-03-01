// src/pages/Home.jsx
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../redux/actions/booksActions";
import BookList from "../components/BookList";

const Home = () => {
  const dispatch = useDispatch();
  const { books, loading } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBooks()); // Fetch books on mount
  }, [dispatch]);

  return (
    <div>
      <h2>All Books</h2>
      {loading ? (
        <p>Loading books...</p> // Show loading message
      ) : books.length === 0 ? (
        <p>No books available.</p>
      ) : (
        <BookList books={books} /> // Display books
      )}
    </div>
  );
};

export default Home;