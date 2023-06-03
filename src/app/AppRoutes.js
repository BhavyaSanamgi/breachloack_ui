import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode'

import SignUp from '../modules/auth/SignUp';
import LoginPage from '../modules/auth/SignIn';
import StudentDashboard from '../modules/student/Dashboard';
import TutorDashboard from '../modules/tutor/Dashboard';
import { UserRole } from '../constants/userRole';
import UnauthorizedPage from '../modules/auth/UnauthorizedPage';
import CartPage from '../modules/student/Cart';

const AppRoutes = () => {
  const accessToken = localStorage.getItem('accessToken')
  let userRole = ''

  if (accessToken) {
    const userDetails = jwt_decode(accessToken)
    userRole = userDetails?.role
  }

  const tutorGuard = (element) => {
    console.log(userRole)
    if (userRole !== UserRole.TUTOR) {
      return <Navigate to="/401-unauthorized" />;
    }
    return element;
  };
  const studentGuard = (element) => {
    if (userRole !== UserRole.STUDENT) {
      return <Navigate to="/401-unauthorized" />;
    }
    return element;
  };


  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<LoginPage />} />
      <Route path="/student" element={studentGuard(<StudentDashboard />)} />
      <Route path="/tutor" element={tutorGuard(<TutorDashboard />)} />
      <Route path="/401-unauthorized" element={<UnauthorizedPage />} />
      <Route path="/500-error" element={<>Error</>} />
      <Route path="/cart" element={studentGuard(<CartPage />)} />
    </Routes>
  );
};

export default AppRoutes;
