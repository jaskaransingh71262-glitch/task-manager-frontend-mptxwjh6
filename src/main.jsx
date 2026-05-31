import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
const primaryColor = '#3498db';
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App primaryColor={primaryColor} />
  </BrowserRouter>
);