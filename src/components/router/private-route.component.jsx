import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { userSelector } from '../../store/slices/user.slice.js';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useSelector(userSelector);

  return <Route {...rest} render={(props) => (isAuthenticated ? <Component {...props} /> : <Redirect to="/" />)} />;
};

export default PrivateRoute;
