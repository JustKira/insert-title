import { createContext,useState,useEffect } from 'react'
import jwt_decode from "jwt-decode"
import { useNavigate  } from 'react-router-dom'
import { useContext } from 'react'

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({children}) => {

    let  [authTokens,setAuthTokens] = useState( localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    let  [user ,setUser] =  useState( localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null)
    let  [loading,setLoading] = useState(true)  
    const navigate = useNavigate ()
    
    let loginUser = async (e) => {

        e.preventDefault()

        let response = await fetch('http://127.0.0.1:8000/api/token',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({'email':e.target.email.value,'password':e.target.password.value})
        })
        let data = await response.json()
         
        if(response.status === 200){
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authTokens',JSON.stringify(data))
            navigate('/')
        }else{
            alert('Somthing went wronge')
        }
    }

    let registerUser = async (e) =>{
        e.preventDefault()
        console.log(e)
        let response = await fetch('http://127.0.0.1:8000/api/user-create',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({'username':e.target.username.value,'email':e.target.email.value,'first_name':e.target.first_name.value,'password':e.target.password.value,'password2':e.target.password.value})
        })
        console.log(response.data)
    }


    let logoutUser = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')
        navigate('/login')
    }

    let contextData={
        user:user,
        authTokens:authTokens,
        registerUser:registerUser,
        logoutUser:logoutUser,
        loginUser:loginUser,
        
    }
    
    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}