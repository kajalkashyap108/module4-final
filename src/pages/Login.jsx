import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions/authActions';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
    navigate('/');
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: '400px',
        margin: '50px auto',
        padding: '2rem',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <h2
        style={{
          textAlign: 'center',
          color: '#333',
          fontSize: '1.5rem',
          marginBottom: '1rem',
          fontWeight: 'bold',
        }}
      >
        Login
      </h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
        style={{
          padding: '0.8rem',
          fontSize: '1rem',
          border: '1px solid #ddd',
          borderRadius: '4px',
          outline: 'none',
          transition: 'border-color 0.3s',
        }}
        onFocus={(e) => (e.target.style.borderColor = '#007bff')}
        onBlur={(e) => (e.target.style.borderColor = '#ddd')}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
        style={{
          padding: '0.8rem',
          fontSize: '1rem',
          border: '1px solid #ddd',
          borderRadius: '4px',
          outline: 'none',
          transition: 'border-color 0.3s',
        }}
        onFocus={(e) => (e.target.style.borderColor = '#007bff')}
        onBlur={(e) => (e.target.style.borderColor = '#ddd')}
      />
      <button
        type="submit"
        style={{
          padding: '0.8rem',
          fontSize: '1rem',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          transition: 'backgroundColor 0.3s',
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = '#0056b3')}
        onMouseOut={(e) => (e.target.style.backgroundColor = '#007bff')}
      >
        Login
      </button>
    </form>
  );
};

export default Login;