import "./App.css"
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProtectedeRoute from './utils/ProtectedeRoute';

import AuthContext, { AuthProvider } from './context/ral/AuthContext'

import { useContext } from "react";
import HomePage from './pages/HomePage';
import LoginPage from './pages/ral/LoginPage'
import RegisterPage from './pages/ral/RegisterPage'
import Header from './components/Header'
import Footer from "./components/Footer";
import PostingsPage from "./pages/PostingsPage";
import SRPage from "./pages/ral/SRPage";
import ClassifedRoute from "./utils/ClassifedRoute";

function App() {
  
  //let {ituser} = useContext(AuthContext)

  return (
    <div className="App">
      <div className='wrapper'>
      <Router> 
        <AuthProvider>   
        {/* Auth provieder provide ITUSER that i want to use az a props 
          in  <Route element={<ClassifedRoute type='public' usertype = {ituser.usertype}/>}>
        */}
        <Header/>
        <Routes>
          <Route element={<LoginPage/>} path="/login" />
          <Route element={<RegisterPage/>} path="/register" />
          <Route element={<ClassifedRoute type='public'/>}>
            <Route element={<HomePage/>} path="/" exact/>
          </Route>
          <Route element={<ClassifedRoute type='student' />}>
            <Route element={<SRPage/>} path="/sr" />
          </Route>
          <Route element={<ClassifedRoute type='recuiter' />}>
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
