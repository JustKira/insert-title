import React,{useContext} from 'react'
import { Link } from 'react-router-dom';
import AuthContext from '../../context/ral/AuthContext'

const LoginPage = () => {
    let {loginUser} = useContext(AuthContext)
    
    return (
        <div>
            <form onSubmit={loginUser}>
                <input type='text' name='username' placeholder='Enter Username'/>
                <input type='password' name='password' placeholder='Enter Password'/>
                <input type='submit'/>
            </form>
            <Link to="/Register">Register</Link>
        </div>
    )
}

export default LoginPage