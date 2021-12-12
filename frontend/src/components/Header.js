import React , {useContext} from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/ral/AuthContext';

const Header = () => {

    let {user,logoutUser} = useContext(AuthContext)

    return (
        <div>
            <Link to="/"> Home</Link>
            <span> | </span>

            {user ? (
                <p onClick={logoutUser}>Logout</p>
            ):(
                <Link to="/Login"> Login</Link>
            )}
                       
            {user && <p>Hello {user.username}</p>}
        </div>
    )
}

export default Header
