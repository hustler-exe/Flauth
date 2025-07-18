// frontend/src/Dashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Optional: clear any auth tokens or user data here
    navigate('/');
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Welcome to your Dashboard</h2>
      <p style={styles.text}>You're successfully logged in!</p>
      <button style={styles.button} onClick={handleLogout}>Logout</button>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: '100px auto',
    padding: '30px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    border: '1px solid #ccc',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
  },
  header: {
    fontSize: '26px',
    marginBottom: '15px'
  },
  text: {
    fontSize: '18px',
    color: '#555',
    marginBottom: '25px'
  },
  button: {
    padding: '12px 20px',
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold'
  }
};

export default Dashboard;
