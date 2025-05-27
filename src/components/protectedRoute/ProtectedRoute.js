import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('adminToken');
console.log('token',token)  
  if (!token) {
    return <Navigate to="/admin-login" />;
  }

  return children;
};

export default ProtectedRoute;
