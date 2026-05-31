import React, { useState } from 'react';
import RegisterForm from '../components/RegisterForm.jsx';
import api from '../api.js';
import { useAuth } from '../context/AuthContext.jsx';
const RegisterPage = ({ primaryColor }) => {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const handleRegister = async () => {
    try {
      setLoading(true);
      const token = await api.register(username, email, password);
      login(token);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="container mt-5">
      <h1>Register</h1>
      <RegisterForm
        username={username}
        email={email}
        password={password}
        onChangeUsername={(e) => setUsername(e.target.value)}
        onChangeEmail={(e) => setEmail(e.target.value)}
        onChangePassword={(e) => setPassword(e.target.value)}
        onRegister={handleRegister}
        loading={loading}
        error={error}
      />
    </div>
  );
};
export default RegisterPage;