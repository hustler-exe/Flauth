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
      <div style={{ textAlign: 'right', padding: '10px' }}>
        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            background: 'transparent',
            border: 'none',
            color: darkMode ? '#eeeeee' : '#000000',
            cursor: 'pointer',
            fontSize: '32px',
            padding: '6px 12px',
            borderRadius: '6px',
            outline: 'none',
            boxShadow: 'none',
            transition: 'background 0.2s ease',
          }}
          onMouseEnter={e => {
            e.target.style.background = 'transparent';
            e.target.style.outline = 'none';
            e.target.style.boxShadow = 'none';
          }}
          onFocus={e => {
            e.target.style.outline = 'none';
            e.target.style.boxShadow = 'none';
          }}
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>

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
    </>
  );
}

export default App;
