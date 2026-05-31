import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import Navbar from './components/Navbar.jsx';
import { useAuth } from './context/AuthContext.jsx';
const App = ({ primaryColor }) => {
  const { user } = useAuth();
  return (
    <div>
      <Navbar primaryColor={primaryColor} />
      <Routes>
        <Route path="/" element={<DashboardPage primaryColor={primaryColor} />} />
        <Route path="/login" element={!user ? <LoginPage primaryColor={primaryColor} /> : <Navigate to="/" replace />} />
        <Route path="/register" element={!user ? <RegisterPage primaryColor={primaryColor} /> : <Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};
export default App;