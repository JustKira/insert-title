import "./App.css"
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProtectedeRoute from './utils/ProtectedeRoute';

import { AuthProvider } from './context/ral/AuthContext'

import HomePage from './pages/HomePage';
import LoginPage from './pages/ral/LoginPage'
import RegisterPage from './pages/ral/RegisterPage'
import Header from './components/Header'


function App() {
  return (
    <div className="App">
      <Router> 
        <AuthProvider>        
        <Header/>
        <Routes>
          <Route element={<LoginPage/>} path="/login" />
          <Route element={<RegisterPage/>} path="/Register" />
          <Route element={<ProtectedeRoute/>}/>
          <Route element={<HomePage/>} path="/" exact/>    
              </Routes>   
        </AuthProvider>
      </Router> 
    </div>
  );
}

export default App;
