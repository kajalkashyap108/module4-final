// src/components/BookCard.jsx
import { useDispatch, useSelector } from "react-redux";
import { addToMyBooks } from "../redux/actions/booksActions";
import defaultBookCover from "../assets/bookimage.jpg"; // Import default image

const BookCard = ({ book }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleAdd = () => {
    if (!user) {
      alert("Please log in to add this book!");
      return;
    }
    dispatch(addToMyBooks(book, user.email));
    alert("Added to My Books");
  };

  return (
    <div
      className="book-card"
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "1rem",
        margin: "1rem",
        backgroundColor: "#fff",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        maxWidth: "200px",
        textAlign: "center",
        transition: "transform 0.3s, boxShadow 0.3s",
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.1)";
      }}
    >
      <img
        src={book.imageUrl || defaultBookCover} // Use book.imageUrl or default image
        alt={`${book.title} cover`}
        style={{
          maxWidth: "150px",
          height: "auto",
          borderRadius: "4px",
          marginBottom: "0.5rem",
          objectFit: "cover",
        }}
      />
      <h3
        style={{
          margin: "0.5rem 0",
          color: "#333",
          fontSize: "1.2rem",
          fontWeight: "bold",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {book.title}
      </h3>
      <p
        style={{
          margin: "0.5rem 0",
          color: "#666",
          fontSize: "0.9rem",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        Author: {book.author}
      </p>
      <button
        onClick={handleAdd}
        style={{
          padding: "0.6rem 1rem",
          fontSize: "0.9rem",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          transition: "backgroundColor 0.3s",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
      >
        Want to Read
      </button>
    </div>
  );
};

export default BookCard;