import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleReset = (e) => {
    e.preventDefault(); // Prevent default form submit
    if (!email) {
      setMessage('Please enter your email address.');
    } else {
      setMessage('If an account exists with that email, a reset link has been sent.');
      setTimeout(() => navigate('/login'), 3000);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Forgot Password</h2>
      <form onSubmit={handleReset}>
        <input
          type="email"
          placeholder="Enter your registered email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Send Reset Link</button>
      </form>
      {message && <p style={styles.message}>{message}</p>}
      <p style={styles.linkText}>
        Remembered your password? <Link to="/login">Login</Link>
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
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold'
  },
  message: { color: 'green', marginTop: '10px' },
  linkText: { marginTop: '15px' }
};

export default ForgotPassword;
