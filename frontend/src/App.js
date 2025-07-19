// frontend/src/App.js
import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import ForgotPassword from './ForgotPassword';
import ProtectedRoute from './ProtectedRoute';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? '#1e1e1e' : '#ffffff';
    document.body.style.color = darkMode ? '#eeeeee' : '#000000';
  }, [darkMode]);

  return (
    <>
      {/* Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '12px 24px',
          backgroundColor: darkMode ? '#1e1e1e' : '#ffffff',
          position: 'sticky',
          top: 0,
          zIndex: 100,
          boxShadow: darkMode
            ? '0 1px 2px rgba(0, 0, 0, 0.4)'
            : '0 1px 2px rgba(0, 0, 0, 0.08)',
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: '24px',
            fontWeight: '600',
            color: darkMode ? '#90caf9' : '#1976d2',
            fontFamily: 'Segoe UI, Roboto, sans-serif',
          }}
        >
          Flauth
        </h1>

        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            background: 'transparent',
            border: 'none',
            color: darkMode ? '#eeeeee' : '#000000',
            cursor: 'pointer',
            fontSize: '28px',
            padding: '6px 12px',
            borderRadius: '6px',
            transition: 'background 0.2s ease',
          }}
          title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>

      {/* Page Content */}
      <div style={{ padding: '24px' }}>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login darkMode={darkMode} />} />
          <Route path="/register" element={<Register darkMode={darkMode} />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard darkMode={darkMode} />
              </ProtectedRoute>
            }
          />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
