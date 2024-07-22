import React, { useState } from 'react';
import BookList from './components/BookList';
import MemberList from './components/MemberList';
import BorrowedBookList from './components/BorrowedBookList';
import AddBook from './components/AddBook';
import AddMember from './components/AddMember';
import AddBorrowedBook from './components/AddBorrowedBook';

import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('books');
  const [books, setBooks] = useState([]);
  const [members, setMembers] = useState([]);
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  const refreshBooks = () => setBooks([]); // Clear books to force a re-fetch
  const refreshMembers = () => setMembers([]); // Clear members to force a re-fetch
  const refreshBorrowedBooks = () => setBorrowedBooks([]); // Clear borrowed books to force a re-fetch

  return (
    <div className="App">
      
      <header>
        <h1>Library Management System</h1>
      </header>
      <nav className="tabs">
        <button onClick={() => setActiveTab('books')}>Books</button>
        <button onClick={() => setActiveTab('members')}>Members</button>
        <button onClick={() => setActiveTab('borrowed')}>Borrowed Books</button>
      </nav>
      <main>
        {activeTab === 'books' && (
          <section className="books-section">
            <BookList books={books} setBooks={setBooks} />
            <AddBook onBookAdded={refreshBooks} />
          </section>
        )}
        {activeTab === 'members' && (
          <section className="members-section">
            <MemberList members={members} setMembers={setMembers} />
            <AddMember onMemberAdded={refreshMembers} />
          </section>
        )}
        {activeTab === 'borrowed' && (
          <section className="borrowed-section">
            <BorrowedBookList borrowedBooks={borrowedBooks} setBorrowedBooks={setBorrowedBooks} />
            <AddBorrowedBook onBorrowedBookAdded={refreshBorrowedBooks} />
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
