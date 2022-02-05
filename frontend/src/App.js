import "./App.css"
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProtectedeRoute from './utils/ProtectedeRoute';

import HomePage from './pages/HomePage';
import LoginPage from './pages/ral/LoginPage'
import Header from './components/Header'
import Footer from "./components/Footer";
import PostingsPage from "./pages/PostingsPage";
import RegisterPage from "./pages/ral/RegisterPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <div className="App">
      <div className='wrapper'>
      <Router>      
        <Header/>
        <Routes>
          <Route element={<LoginPage/>} path="/login" />
          <Route element={<RegisterPage/>} path="/register" />
          <Route element={<ProtectedeRoute/>}>
            <Route element={<HomePage/>} path="/" exact/>
            <Route element={<ProfilePage/>} path="/profile" exact/>
            <Route element={<PostingsPage/>} path="/postings" exact/>
          </Route>
        </Routes>
        <Footer />
      </Router> 
      </div>
    </div>
  );
}

export default App;
