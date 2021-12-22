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


function App() {
  return (
    <div className="App">
      <div className='wrapper'>
      <Router> 
        <AuthProvider>        
        <Header/>
        <Routes>
          <Route element={<LoginPage/>} path="/login" />
<<<<<<< HEAD
          <Route element={<RegisterPage/>} path="/Register" />
          <Route element={<ProtectedeRoute/>}/>
          <Route element={<HomePage/>} path="/" exact/>    
              </Routes>   
=======
          <Route element={<RegisterPage/>} path="/register" />
          <Route element={<ProtectedeRoute/>}>
            <Route element={<HomePage/>} path="/" exact/>
          </Route>
        </Routes>
>>>>>>> refs/remotes/origin/master
        </AuthProvider>
        <Footer />
      </Router> 
      </div>
    </div>
  );
}

export default App;
