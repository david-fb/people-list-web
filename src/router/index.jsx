import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../components/App';
import Login from '../components/Login';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);
