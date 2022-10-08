import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../components/App';
import Login from '../components/Login';
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
