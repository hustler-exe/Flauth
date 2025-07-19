import React, { useState, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from './api';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const passwordRef = useRef(null);

  const handleLogin = async () => {
    setMessage('');
    setLoading(true);
    try {
      const response = await api.post('/login', { email, password });
      setMessage(response.data.message);
      if (response.status === 200) {
        localStorage.setItem('token', response.data.token); // ✅ Store token
        navigate('/dashboard'); // ✅ Redirect after login
      }
    } catch (err) {
      if (err.response) {
        if (err.response.status === 429) {
          setMessage('Too many login attempts. Please try again later.');
        } else {
          setMessage(err.response.data.error || 'Server error');
        }
      } else {
        setMessage('Server error. Please try again later.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Login</h2>
      <input
        style={styles.input}
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        onKeyDown={e => {
          if (e.key === 'Enter') passwordRef.current?.focus();
        }}
      />
      <input
        style={styles.input}
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        ref={passwordRef}
        onKeyDown={e => {
          if (e.key === 'Enter') handleLogin();
        }}
      />
      <div style={styles.forgotContainer}>
        <Link to="/forgot-password" style={styles.forgotLink}>Forgot Password?</Link>
      </div>
      <button
        style={{
          ...styles.button,
          backgroundColor: loading ? '#ccc' : '#007bff',
          cursor: loading ? 'not-allowed' : 'pointer'
        }}
        onClick={handleLogin}
        disabled={loading}
      >
        {loading ? 'Logging in...' : 'Login'}
      </button>
      {message && <p style={styles.message}>{message}</p>}
      <p style={styles.linkText}>
        Don't have an account? <Link to="/register">Register</Link>
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
  forgotContainer: {
    textAlign: 'right',
    width: '90%',
    margin: '5px auto 15px',
  },
  forgotLink: {
    fontSize: '0.9rem',
    textDecoration: 'none',
    color: '#007bff'
  },
  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold'
  },
  message: { color: 'red', marginTop: '10px' },
  linkText: { marginTop: '15px' }
};

export default Login;
