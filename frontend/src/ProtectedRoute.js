// frontend/src/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('token'); // or however you store JWT

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;