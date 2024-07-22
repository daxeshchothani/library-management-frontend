import React, { useState } from 'react';
import api from '../api/axios';

function AddMember({ onMemberAdded }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [membershipStartDate, setMembershipStartDate] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/members', {
        first_name: firstName,
        last_name: lastName,
        email,
        phone_number: phoneNumber,
        membership_start_date: membershipStartDate,
      });
      setMessage('Member added successfully');
      // Reset form
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhoneNumber('');
      setMembershipStartDate('');
      onMemberAdded(); // Trigger a refresh of the member list
      console.log('Success:', response.data);
    } catch (error) {
      setMessage('Error adding member');
      console.error('Error:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div>
      <h2>Add New Member</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} placeholder="First Name" required />
        <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} placeholder="Last Name" required />
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
        <input type="tel" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} placeholder="Phone Number" />
        <input type="date" value={membershipStartDate} onChange={e => setMembershipStartDate(e.target.value)} required />
        <button type="submit">Add Member</button>
      </form>
    </div>
  );
}

export default AddMember;
