import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { userSelector } from '../../store/slices/user.slice.js';

const PublicRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useSelector(userSelector);

  return (
    <Route {...rest} render={(props) => (isAuthenticated ? <Redirect to="/dashboard" /> : <Component {...props} />)} />
  );
};

export default PublicRoute;
