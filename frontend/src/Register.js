import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from './api';

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const passwordRef = useRef(null);
  const confirmRef = useRef(null);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleRegister = async () => {
    setMessage('');

    if (!email || !password || !confirmPassword) {
      setMessage('All fields are required.');
      return;
    }

    if (!validateEmail(email)) {
      setMessage('Invalid email format.');
      return;
    }

    if (password !== confirmPassword) {
      setMessage('Passwords do not match.');
      return;
    }

    setLoading(true);
    try {
      const response = await api.post('/register', { email, password });
      setMessage(response.data.message);
      if (response.status === 200) navigate('/');
    } catch (err) {
      if (err.response?.status === 429) {
        setMessage('Too many requests. Please wait and try again.');
      } else {
        setMessage(err.response?.data?.error || 'Registration failed.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Register</h2>
      <input
        style={styles.input}
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        onKeyDown={e => {
          if (e.key === 'Enter') {
            e.preventDefault();
            passwordRef.current?.focus();
          }
        }}
      />
      <input
        style={styles.input}
        type="password"
        placeholder="Password"
        value={password}
        ref={passwordRef}
        onChange={e => setPassword(e.target.value)}
        onKeyDown={e => {
          if (e.key === 'Enter') {
            e.preventDefault();
            confirmRef.current?.focus();
          }
        }}
      />
      <input
        style={styles.input}
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        ref={confirmRef}
        onChange={e => setConfirmPassword(e.target.value)}
        onKeyDown={e => {
          if (e.key === 'Enter') {
            e.preventDefault();
            handleRegister();
          }
        }}
      />
      <button
        style={{
          ...styles.button,
          backgroundColor: loading ? '#ccc' : '#28a745',
          cursor: loading ? 'not-allowed' : 'pointer'
        }}
        onClick={handleRegister}
        disabled={loading}
      >
        {loading ? 'Registering...' : 'Register'}
      </button>
      {message && <p style={styles.message}>{message}</p>}
      <p style={styles.linkText}>
        Already have an account? <Link to="/">Login</Link>
      </p>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '400px',
    margin: '80px auto',
    padding: '30px',
    border: '1px solid #ccc',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif'
  },
  header: { marginBottom: '20px' },
  input: {
    width: '90%',
    padding: '12px',
    margin: '10px 0',
    borderRadius: '8px',
    border: '1px solid #ccc'
  },
  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold'
  },
  message: { color: 'red', marginTop: '10px' },
  linkText: { marginTop: '15px' }
};

export default Register;
