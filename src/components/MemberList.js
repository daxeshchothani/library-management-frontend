import React, { useState, useEffect } from 'react';
import api from '../api/axios';

function MemberList() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await api.get('/members');
        setMembers(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchMembers();
  }, []); // Empty dependency array ensures this runs only once

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="member-list">
      <h2>Members</h2>
      <ul>
        {members.map(member => (
          <li key={member.member_id} className="member-item">
            {member.first_name} {member.last_name} - {member.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MemberList;
