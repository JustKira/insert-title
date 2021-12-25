import React,{useContext} from 'react'
import { Link } from 'react-router-dom';
import AuthContext from '../../context/ral/AuthContext'

const LoginPage = () => {
    let {loginUser} = useContext(AuthContext)
    
    return (
        <div className='form_container content'>
            <form onSubmit={loginUser}>
                <input type='email' name='email' placeholder='Enter email'/>
                <input type='password' name='password' placeholder='Enter Password'/>
                <input type='submit' className='submitbtn'/>
            </form>
            <div class="container form_text">
                <p>Dont have an account? make one. <Link to="/Register">Register</Link></p>
            </div>
        </div>
    )
}

export default LoginPage