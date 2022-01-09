import React from 'react'
import { Field,reduxForm} from 'redux-form'
import { connect } from 'react-redux';
import { compose } from 'redux'

const RegisterPage = (props) => {
   
    function rFieldInput({input,label}) {
        return (
            <div>
                <label>{label}</label>
                <input {...input}/>
            </div>
        )
    }

    function onSubmit({first_name,username,email,password}){
        console.log(first_name + username + email + password)
        CreateAccount(first_name,username,email,password)
    }
    
    return (
        <div>
            <form onSubmit={props.handleSubmit(onSubmit)}>
                <Field name='first_name' component={rFieldInput} label='first_name' />
                <Field name='username' component={rFieldInput} label='username' />
                <Field name='email' component={rFieldInput} label='email' />
                <Field name='password' component={rFieldInput} label='password' />
                <Field name='password2' component={rFieldInput} label='Confirm Password' />
                <button>Next</button>
            </form>
        </div>
    )
}
const CreateAccount = async (first_name,username,email,password,password2) => {
    let response = await fetch('http://127.0.0.1:8000/api/user-create',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({'first_name':first_name,'username':username,'email':email,'password':password})
    })
}
const mapPropsToState = (state) => {
    return { accessToken : state.auth.state.access}
}
export default compose(
    reduxForm({
        form: 'registerPage'
    }),
    connect(mapPropsToState)
)(RegisterPage)