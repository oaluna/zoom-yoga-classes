import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import auth from './auth-helper';

const PrivateRoute = ({ element: Element, ...rest }) => (
  <Route
    {...rest}
    element={auth.isAuthenticated() ? (
      <Element />
    ) : (
      <Routes>
        <Navigate
          to={{
            pathname: '/signin',
            state: { from: rest.location },
          }}
        />
      </Routes>
    )}
  />
);

export default PrivateRoute;
