import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  const role = localStorage.getItem('userRole') || '';
  const isAdmin = role === 'admin';
  return isAdmin ? children : <Navigate to="/login"  replace />; 
}
