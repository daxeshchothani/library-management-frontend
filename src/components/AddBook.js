import React, { useState } from 'react';
import api from '../api/axios';

function AddBook({ onBookAdded }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishedDate, setPublishedDate] = useState('');
  const [isbn, setIsbn] = useState('');
  const [copiesAvailable, setCopiesAvailable] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/books', {
        title,
        author,
        published_date: publishedDate,
        isbn,
        copies_available: copiesAvailable,
      });
      console.log('Success:', response.data);
      onBookAdded(); // Trigger a refresh of the book list
      // Reset form
      setTitle('');
      setAuthor('');
      setPublishedDate('');
      setIsbn('');
      setCopiesAvailable(0);
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div>
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" required />
        <input type="text" value={author} onChange={e => setAuthor(e.target.value)} placeholder="Author" required />
        <input type="date" value={publishedDate} onChange={e => setPublishedDate(e.target.value)} required />
        <input type="text" value={isbn} onChange={e => setIsbn(e.target.value)} placeholder="ISBN" required />
        <input type="number" value={copiesAvailable} onChange={e => setCopiesAvailable(Number(e.target.value))} placeholder="Copies Available" required />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;
