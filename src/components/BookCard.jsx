// src/components/BookCard.jsx
import { useDispatch, useSelector } from "react-redux";
import { addToMyBooks } from "../redux/actions/booksActions";

const BookCard = ({ book }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleAdd = () => {
    if (!user) {
      alert("Please log in to add this book!");
      return;
    }
    dispatch(addToMyBooks(book, user.email));
  };

  return (
    <div className="book-card">
      {book.imageUrl && (
        <img
          src={book.imageUrl}
          alt={`${book.title} cover`}
          style={{ maxWidth: "150px", height: "auto" }} // Adjust size as needed
          onError={(e) => (e.target.src = "https://via.placeholder.com/150")} // Fallback image
        />
      )}
      <h3>{book.title}</h3>
      <p>Author: {book.author}</p>
      <button onClick={handleAdd}>Want to Read</button>
    </div>
  );
};

export default BookCard;