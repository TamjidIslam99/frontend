import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://127.0.0.1:8000/api/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
    .then(response => {
      if (response.ok) {
       
        return response.json();
        
      }
      alert("Log in failed");
      throw new Error('Login failed');
      
    })
    .then(data => {
      
      navigate('/home');
      // Save token to localStorage or handle it accordingly
    })
    .catch(error => console.error('Error logging in:', error));
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;