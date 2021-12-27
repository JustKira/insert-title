import React, { useState } from 'react'
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../context/ral/AuthContext";

const ClassifedRoute = ({usertype,type}) => {

    let {ituser} = useContext(AuthContext)
    let classifed = (user) =>{
        if(user && type === user){
            console.log(user)
            return true
    
            //errors      
        }else{
            console.log('error')
            console.log(user)
            return null
        }
    } 

    return classifed(usertype)? <Outlet /> : <Navigate to="/login" />;
}

export default ClassifedRoute
