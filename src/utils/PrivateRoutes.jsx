import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React from 'react';
import { selectIsUserLoggedIn } from '../reducers/userSlice';

export default function PrivateRoutes() {
  const isLoggedIn = useSelector(selectIsUserLoggedIn);

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}
