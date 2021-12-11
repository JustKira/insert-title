import "./App.css"
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';

import HomePage from './pages/HomePage';
import LoginPage from './pages/ral/LoginPage'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Router> 
        <Header/>
        <Routes>
          <Route element={<HomePage/>} path="/"  />
          <Route element={<LoginPage/>} path="/login" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
