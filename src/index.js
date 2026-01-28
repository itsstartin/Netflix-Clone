import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter as Router,Route, Routes, Navigate} from 'react-router-dom'
import SignUp from './pages/SignUp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
      <Route Component={App} path='/home'/>
      <Route element={<Navigate to='/signup'/>} path='/'/>
      <Route Component={SignUp} path='/signup'/>
      </Routes>
    </Router>
  </React.StrictMode>
);


