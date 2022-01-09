import { createContext,useState,useEffect } from 'react'
import jwt_decode from "jwt-decode"
import { useNavigate  } from 'react-router-dom'
import { useContext } from 'react'
import axios from 'axios'
import AuthContext from './AuthContext'

const SRContext = createContext();

export default SRContext;

export const SRProvider = ({children}) => {
    let {user} = useContext(AuthContext)

    let createStudent = async (e) => {
        let response = await fetch('http://127.0.0.1:8000/api/student-create',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({'undergraduate_year' : e.target.undergraduate_year.value,'phone_number' : e.target.phone_number.value,'brithdate' : e.target.brithdate.value})
        })
    }

    let createRecruiter = async (e) => {
        let response = await axios.post('http://127.0.0.1:8000/api/student-create',{
            params: {
                user : user.user_id,
                phone_number : e.target.phone_number.value,
                brithdate : e.target.brithdate.value,
                bio : e.target.bio.value
            }
        })
        
    }

    let contextData ={
        createStudent:createStudent,
        createRecruiter:createRecruiter
    }

    return(
        <SRContext.Provider value={contextData}>
            {children}
        </SRContext.Provider>
    )
}