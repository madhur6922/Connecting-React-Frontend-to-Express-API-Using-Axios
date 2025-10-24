import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');

  // Fetch users from backend
  useEffect(() => {
    axios.get('http://localhost:5000/api/users')
      .then(res => setUsers(res.data))
      .catch(err => console.error(err));
  }, []);

  // Add new user
  const addUser = () => {
    axios.post('http://localhost:5000/api/users', { name })
      .then(res => setUsers([...users, res.data]))
      .catch(err => console.error(err));
    setName('');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Users</h1>
      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
      <input 
        type="text" 
        value={name} 
        onChange={e => setName(e.target.value)} 
        placeholder="Enter name" 
      />
      <button onClick={addUser}>Add User</button>
    </div>
  );
}

export default App;
