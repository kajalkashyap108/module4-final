// src/components/MyBookCard.jsx
import { useDispatch, useSelector } from "react-redux";
import { updateBookStatus, updateBookRating } from "../redux/actions/booksActions";
import defaultBookCover from "../assets/bookimage.jpg"; // Import default image

const MyBookCard = ({ book }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleStatusChange = (e) => {
    dispatch(updateBookStatus(book.id, e.target.value, user.email));
  };

  const handleRatingChange = (e) => {
    dispatch(updateBookRating(book.id, Number(e.target.value), user.email));
  };

  return (
    <div
      className="my-book-card"
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "1rem",
        margin: "1rem",
        backgroundColor: "#fff",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        maxWidth: "400px",
        display: "flex",
        alignItems: "center",
        gap: "1rem",
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
          objectFit: "cover",
        }}
      />
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          overflow: "hidden",
        }}
      >
        <h3
          style={{
            margin: 0,
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
            margin: 0,
            color: "#666",
            fontSize: "0.9rem",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          Author: {book.author}
        </p>
        <label
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            color: "#333",
            fontSize: "0.9rem",
          }}
        >
          Status:
          <select
            value={book.status || "Want to Read"} // Default to "Want to Read" if undefined
            onChange={handleStatusChange}
            style={{
              padding: "0.5rem",
              fontSize: "0.9rem",
              border: "1px solid #ddd",
              borderRadius: "4px",
              outline: "none",
              transition: "border-color 0.3s",
              flex: 1,
              maxWidth: "150px",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#007bff")}
            onBlur={(e) => (e.target.style.borderColor = "#ddd")}
          >
            <option value="Want to Read">Want to Read</option>
            <option value="Currently Reading">Currently Reading</option>
            <option value="Read">Read</option>
          </select>
        </label>
        <label
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            color: "#333",
            fontSize: "0.9rem",
          }}
        >
          Rating:
          <select
            value={book.rating || 0} // Default to 0 if undefined
            onChange={handleRatingChange}
            style={{
              padding: "0.5rem",
              fontSize: "0.9rem",
              border: "1px solid #ddd",
              borderRadius: "4px",
              outline: "none",
              transition: "border-color 0.3s",
              flex: 1,
              maxWidth: "150px",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#007bff")}
            onBlur={(e) => (e.target.style.borderColor = "#ddd")}
          >
            {[0, 1, 2, 3, 4, 5].map((r) => (
              <option key={r} value={r}>
                {r} Stars
              </option>
            ))}
          </select>
        </label>
      </div>
    </div>
  );
};

export default MyBookCard;