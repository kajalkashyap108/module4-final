// src/components/BookList.jsx
import BookCard from "./BookCard";

const BookList = ({ books }) => (
  <div className="book-list">
    {books.map((book) => (
      <BookCard key={book.id} book={book} /> // Pass each book to BookCard
    ))}
  </div>
);

export default BookList;