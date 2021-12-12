import React,{useContext} from 'react'
import { Link } from 'react-router-dom';
import AuthContext from '../../context/ral/AuthContext'

const RegisterPage = () => {
    let {registerUser} = useContext(AuthContext)
    
    return (
        <div>
            <form onSubmit={registerUser}>
                <input type='text' name='username' placeholder='Enter Username'/>
                <input type='email' name='email' placeholder ='Enter email'/>
                <input type='password' name='password' placeholder='Enter Password'/>
                <input type='password' name='password2' placeholder='Enter Confirm Password'/>
                <input type='submit'/>
            </form>
            <Link to="/Login">Login</Link>
        </div>
    )
}
export default RegisterPage