import React , {useContext} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { userLogoutAction } from '../redux/actions'
const Header = (props) => {

    return (
        <div className="header">
            <ul className='nav'>
                <li id='headerlogo'><Link to="/"><img id='header_logo' src="assets/logo.png"/></Link></li>
                <li>{props.user && <a id='greeting'>Hello {props.user.username}</a>}</li>
                <li><Link to="/postings">Postings</Link></li>
                <li><Link to="/profile/">Profile</Link></li>
                <li><Link to="/career">Career</Link></li>
                {props.user ? (
                <li><a onClick={props.userLogoutAction}>Logout</a></li>
            ):(
                <li><Link to="/Login"> Login</Link></li>
                
            )}
            </ul>      
        </div>
    )
}

const mapPropsToState = (state) => {
    if(state.auth.state){
        return { user : state.user.state}
    }
}
export default connect(mapPropsToState,{userLogoutAction})(Header)
