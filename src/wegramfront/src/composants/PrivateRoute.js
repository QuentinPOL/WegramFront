import React from 'react';
import Cookies from 'js-cookie';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const authToken = Cookies.get('authToken');

  return authToken ? children : <Navigate to="/" replace />;
};

export default PrivateRoute;
