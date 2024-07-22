import React, { useState, useEffect } from 'react';
import api from '../api/axios';

function BorrowedBookList() {
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBorrowedBooks = async () => {
      try {
        const response = await api.get('/borrowed-books');
        setBorrowedBooks(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchBorrowedBooks();
  }, []); // Empty dependency array ensures this runs only once

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="borrowed-book-list">
      <h2>Borrowed Books</h2>
      <ul>
        {borrowedBooks.map(borrowed => (
          <li key={borrowed.borrow_id} className="borrowed-book-item">
            Book ID: {borrowed.book_id}, Member ID: {borrowed.member_id}, 
            Borrow Date: {borrowed.borrow_date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BorrowedBookList;
