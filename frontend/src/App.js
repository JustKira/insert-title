import "./App.css"
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProtectedeRoute from './utils/ProtectedeRoute';

import { AuthProvider } from './context/ral/AuthContext'

import HomePage from './pages/HomePage';
import LoginPage from './pages/ral/LoginPage'
import RegisterPage from './pages/ral/RegisterPage'
import Header from './components/Header'
import Footer from "./components/Footer";
import PostingsPage from "./pages/PostingsPage";

function App() {
  return (
    <div className="App">
      <div className='wrapper'>
      <Router> 
        <AuthProvider>        
        <Header/>
        <Routes>
          <Route element={<LoginPage/>} path="/login" />
          <Route element={<RegisterPage/>} path="/register" />
          <Route element={<ProtectedeRoute/>}>
            <Route element={<HomePage/>} path="/" exact/>
            <Route element={<PostingsPage/>} path="/postings" exact/>
          </Route>
        </Routes>
        </AuthProvider>
        <Footer />
      </Router> 
      </div>
    </div>
  );
}

export default App;
