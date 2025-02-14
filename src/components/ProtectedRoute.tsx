import React from 'react';
import { Navigate } from 'react-router-dom';
import { userSelector } from '../store/authSlice';
import { useSelector } from 'react-redux';
// import { userSelector } from '@/store/authSlice'; // Adjust the path as needed
// import { useSelector } from 'node_modules/react-redux/src/hooks/useSelector';
// import { useAppSelector } from '@/app/hooks'; // Adjust the path as needed

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const user = useSelector(((state) => state.authSlice.user));
  // console.log(user);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;