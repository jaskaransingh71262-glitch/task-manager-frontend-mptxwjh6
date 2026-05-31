import React, { useState } from 'react';
import LoginForm from '../components/LoginForm.jsx';
import api from '../api.js';
import { useAuth } from '../context/AuthContext.jsx';
const LoginPage = ({ primaryColor }) => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const handleLogin = async () => {
    try {
      setLoading(true);
      const token = await api.login(email, password);
      login(token);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <LoginForm
        email={email}
        password={password}
        onChangeEmail={(e) => setEmail(e.target.value)}
        onChangePassword={(e) => setPassword(e.target.value)}
        onLogin={handleLogin}
        loading={loading}
        error={error}
      />
    </div>
  );
};
export default LoginPage;