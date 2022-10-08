import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../pages/App';
import Login from '../pages/Login';
import PrivateRoutes from '../utils/PrivateRoutes';
import LoginRoute from '../utils/LoginRoute';

export const router = createBrowserRouter([
  {
    element: <PrivateRoutes />,
    children: [
      {
        path: '/',
        element: <App />,
      },
    ],
  },
  {
    element: <LoginRoute />,
    children: [
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
]);
