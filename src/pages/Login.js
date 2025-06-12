import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        'https://revoori-sathwika-reddy.onrender.com/api/auth/login',
        { username, password },
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
      );
      if (res.data.success) {
        navigate('/admin');
        console.log("Login response:", res.data);

      }
    } catch (err) {
      console.error('Login error:', err.response?.data || err.message);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
