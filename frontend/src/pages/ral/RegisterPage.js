import React,{useContext} from 'react'
import { Link } from 'react-router-dom';
import AuthContext from '../../context/ral/AuthContext'

const RegisterPage = () => {
    let {registerUser} = useContext(AuthContext)
    
    return (
        <div className='form_container content'>
            <h2>Register</h2>
            <form onSubmit={registerUser}>
                <input type='text' name='first_name' placeholder='Enter your FirstName'/>
                <input type='text' name='username' placeholder='Enter Username'/>
                <input type='email' name='email' placeholder ='Enter email'/>
                <input type='password' name='password' placeholder='Enter Password'/>
                <input type='password' name='password2' placeholder='Enter Confirm Password'/>
                <hr/>
                <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
                <input type='submit' className='submitbtn'/>
            </form>
            <div class="container form_text">
                <p>Already have an account? <Link to="/Login">Login</Link></p>
            </div>
        </div>
    )
}
export default RegisterPage