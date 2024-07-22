import React, { useState, useEffect } from 'react';
import api from '../api/axios';

function AddBorrowedBook({ onBorrowedBookAdded }) {
  const [memberId, setMemberId] = useState('');
  const [bookId, setBookId] = useState('');
  const [borrowDate, setBorrowDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [members, setMembers] = useState([]);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch members and books for dropdowns
    const fetchMembersAndBooks = async () => {
      try {
        const [membersResponse, booksResponse] = await Promise.all([
          api.get('/members'),
          api.get('/books')
        ]);
        setMembers(membersResponse.data);
        setBooks(booksResponse.data);
      } catch (error) {
        console.error('Error fetching members and books:', error);
      }
    };

    fetchMembersAndBooks();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/borrowed-books', {
        member_id: memberId,
        book_id: bookId,
        borrow_date: borrowDate,
        return_date: returnDate
      });
      onBorrowedBookAdded();
      // Reset form
      setMemberId('');
      setBookId('');
      setBorrowDate('');
      setReturnDate('');
    } catch (error) {
      console.error('Error adding borrowed book:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <select
        value={memberId}
        onChange={(e) => setMemberId(e.target.value)}
        required
      >
        <option value="">Select Member</option>
        {members.map((member) => (
          <option key={member.id} value={member.id}>
            {member.first_name} {member.last_name}
          </option>
        ))}
      </select>
      <select
        value={bookId}
        onChange={(e) => setBookId(e.target.value)}
        required
      >
        <option value="">Select Book</option>
        {books.map((book) => (
          <option key={book.id} value={book.id}>
            {book.title}
          </option>
        ))}
      </select>
      <input
        type="date"
        value={borrowDate}
        onChange={(e) => setBorrowDate(e.target.value)}
        placeholder="Borrow Date"
        required
      />
      <input
        type="date"
        value={returnDate}
        onChange={(e) => setReturnDate(e.target.value)}
        placeholder="Return Date"
      />
      <button type="submit">Add Borrowed Book</button>
    </form>
  );
}

export default AddBorrowedBook;