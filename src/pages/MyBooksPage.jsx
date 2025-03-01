// src/pages/MyBooksPage.jsx
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMyBooks } from "../redux/actions/booksActions";
import MyBookCard from "../components/MyBookCard";

const MyBooksPage = () => {
  const { myBooks } = useSelector((state) => state.books);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      dispatch(fetchMyBooks(user.email)); // Fetch user's books on mount
    }
  }, [user, dispatch]);

  if (!user) {
    return <p>Please log in to view your books.</p>;
  }

  return (
    <div>
      <h2>My Books</h2>
      {myBooks.length === 0 ? (
        <p>No books added yet.</p>
      ) : (
        myBooks.map((book) => <MyBookCard key={book.id} book={book} />)
      )}
    </div>
  );
};

export default MyBooksPage;