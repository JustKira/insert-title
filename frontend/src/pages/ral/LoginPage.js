import React,{useContext, useEffect} from 'react'
import { Link } from 'react-router-dom';
import AuthContext from '../../context/ral/AuthContext'
import { Field,reduxForm} from 'redux-form'
import { connect } from 'react-redux';
import { compose } from 'redux'
import { userLogin ,getUserAction , refreshTokenAction } from '../../redux/actions/' 

const LoginPage = (props) => {
    
    useEffect(() => {
        console.log(props.accessToken)
            let fourMin = 1000 * 60 * 4
            let interval = setInterval(() => {
                if(props.accessToken){
                    props.refreshTokenAction() 
                }
            }, fourMin);

            return () => clearInterval(interval)
            
    },[props.accessToken])

    function rFieldInput({input,label}) {
        return (
            <div>
                <label>{label}</label>
                <input {...input}/>
            </div>
        )
    }
    function onSubmit(formValues){
        console.log(formValues)
        props.userLogin(formValues.email,formValues.password)
    }
    return (
        <div className='form_container content'>
            <form onSubmit={props.handleSubmit(onSubmit)}>
                <Field name='email' component={rFieldInput} label='email' />
                <Field name='password' component={rFieldInput} label='password' />
                <button>Submit</button>
            </form>
            <Link to='/Register'>dont have account?</Link>
        </div>
    )
}

const mapPropsToState = (state) => {
    if(state.auth.state){
        return { accessToken : state.auth.state.access}
    }
}
export default compose(
    reduxForm({
        form: 'loginPage'
    }),
    connect(mapPropsToState,{userLogin,getUserAction,refreshTokenAction})
)(LoginPage)