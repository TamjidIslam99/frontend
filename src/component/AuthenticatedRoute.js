// AuthenticatedRoute.js

import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const AuthenticatedRoute = ({ element }) => {
  // Check if the user is authenticated (you can implement your own logic here)
  const isAuthenticated = !!localStorage.getItem('token');

  return isAuthenticated ? <Route element={element} /> : <Navigate to="/" />;
};

export default AuthenticatedRoute;
