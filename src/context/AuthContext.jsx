import React, { createContext, useState, useEffect } from 'react';
import api from '../api.js';
const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => localStorage.getItem('token'));
  const login = (token) => {
    setToken(token);
    localStorage.setItem('token', token);
  };
  const logout = () => {
    setToken(null);
    localStorage.removeItem('token');
  };
  useEffect(() => {
    const fetchMe = async () => {
      if (token) {
        try {
          const me = await api.getMe();
          setUser(me);
        } catch (error) {
          logout();
        }
      }
    };
    fetchMe();
  }, [token]);
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export { AuthProvider, AuthContext };