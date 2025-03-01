// src/components/MyBookCard.jsx
import { useDispatch, useSelector } from "react-redux";
import { updateBookStatus, updateBookRating } from "../redux/actions/booksActions";

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
    <div className="my-book-card">
      <h3>{book.title}</h3>
      <p>Author: {book.author}</p>
      <label>
        Status:
        <select value={book.status} onChange={handleStatusChange}>
          <option value="Want to Read">Want to Read</option>
          <option value="Currently Reading">Currently Reading</option>
          <option value="Read">Read</option>
        </select>
      </label>
      <label>
        Rating:
        <select value={book.rating} onChange={handleRatingChange}>
          {[0, 1, 2, 3, 4, 5].map((r) => (
            <option key={r} value={r}>{r} Stars</option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default MyBookCard;