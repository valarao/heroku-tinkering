import React, { useState, useEffect } from 'react'
import axios from 'axios';



function App() {
  const [users, setUsers] = useState(null);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const getUsers = async () => {
      try {
        const users = await axios.get('/api/users');
        setUsers(users.data);
      } catch (err) {
        console.log(err);
      }
    }
    getUsers();
  }, []);

  const submitForm = async () => {
    if (username === '') {
      alert('Please fill the username field');
      return;
    }
    if (email === '') {
      alert('Please fill the email field');
      return;
    }
    try {
      await axios.post('/api/users', {
        name: username,
        email: email,
      });

      alert('Account created successfully');
      window.location.reload();
    } catch (err) {
      alert('Could not create account. Please try again');
    }
  }


  return (
    <>
      <h1>My Project</h1>
      {users === null ? (
        <p>Loading...</p>
      ) : users.length === 0 ? (
        <p>No user available</p>
      ) : (
        <>
          <h2>Available Users</h2>
          <ol>
            {users.map((user, index) => (
              <li key={index}>
                Name: {user.name} - Email: {user.email}
              </li>
            ))}
          </ol>
        </>
      )}

      <form>
        <input
          onChange={(e) => setUsername(e.target.value)}
          type='text'
          placeholder='Enter your username'
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          type='text'
          placeholder='Enter your email address'
        />
        <input type='button' value='Submit' onClick={submitForm} />
      </form>
    </>
  );
}

export default App;
