import React, { useState, useEffect } from 'react';
import api from '../api/axios';

function BookList() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await api.get('/books');
        setBooks(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchBooks();
  }, []); // Empty dependency array ensures this runs only once

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="book-list">
      <h2>Books</h2>
      <ul>
        {books.map(book => (
          <li key={book.book_id} className="book-item">
            <strong>{book.title}</strong> by {book.author}
            <br />
            ISBN: {book.isbn}, Published: {book.publication_year}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
