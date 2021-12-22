import React , {useContext} from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/ral/AuthContext';

const Header = () => {

    let {user,logoutUser} = useContext(AuthContext)

    return (
        <div className="header">
            <ul className='nav'>
                <li id='headerlogo'><Link to="/"><img id='header_logo' src="assets/logo.png"/></Link></li>
                <li>{user && <a id='greeting'>Hello {user.username}</a>}</li>
                <li><Link to="/postings">Postings</Link></li>
                <li><Link to="/profile/">Profile</Link></li>
                <li><Link to="/career">Career</Link></li>
                {user ? (
                <li><a onClick={logoutUser}>Logout</a></li>
            ):(
                <li><Link to="/Login"> Login</Link></li>
                
            )}
            </ul>      
        </div>
    )
}

export default Header
