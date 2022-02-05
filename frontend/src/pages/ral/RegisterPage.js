import React from 'react'
import { Field,reduxForm} from 'redux-form'
import { connect } from 'react-redux';
import { compose } from 'redux'
import {CustomField,RadioInputField} from '../../utils/CustomField';


const RegisterPage = (props) => {

    function onSubmit({firstname,lastname,username,email,password,userType}){
        console.log(firstname + username + email + password + userType)
        CreateAccount(firstname,lastname,username,email,password,userType)
    }
    
    return (
        <div>
            <form onSubmit={props.handleSubmit(onSubmit)}>
                <Field name='firstname' component={CustomField} label='firstname' type='text'/>
                <Field name='lastname' component={CustomField} label='lastname' type='text'/>
                <Field name='username' component={CustomField} label='username' type='text'/>
                <Field name='email' component={CustomField} label='email' type='email' />
                <Field name='password' component={CustomField} label='password' type='password'/>
                <Field name='password2' component={CustomField} label='Confirm Password' type='password' />
                <label>Classification</label>
                    <div>
                        <Field name='userType' component={CustomField} label='Student' type='radio' value='S' />
                        <Field name='userType' component={CustomField} label='Recruiter' type='radio' value='R'/>
                    </div>
                <button>Next</button>
            </form>
        </div>
    )
}
const CreateAccount = async (firstname,lastname,username,email,password,userType) => {
    let response = await fetch('http://127.0.0.1:8000/api/user-create',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({'email':email,'username':username,'firstname':firstname,'lastname':lastname,'password':password,'userType':userType})
    })
}
// const mapPropsToState = (state) => {
//     return { accessToken : state.auth.state.access}
// }
export default compose(
    reduxForm({
        form: 'registerPage'
    }),
    connect()
)(RegisterPage)