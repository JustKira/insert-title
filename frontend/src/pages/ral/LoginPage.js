import React,{useContext} from 'react'
import { Link } from 'react-router-dom';
import AuthContext from '../../context/ral/AuthContext'

const LoginPage = () => {
    let {loginUser} = useContext(AuthContext)
    
    return (
        <div className='form_container content'>
            <form onSubmit={loginUser}>
                <input type='text' name='username' placeholder='Enter Username'/>
                <input type='password' name='password' placeholder='Enter Password'/>
                <input type='submit' className='submitbtn'/>
            </form>
            <div class="container form_text">
                <p>Already have an account? <Link to="/Register">Register</Link></p>
            </div>
        </div>
    )
}

export default LoginPage