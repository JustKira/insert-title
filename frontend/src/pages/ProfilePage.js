import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Field,reduxForm} from 'redux-form'
import { CustomField } from '../utils/CustomField';
import {compose} from 'redux'



const ProfilePage = (props) => {

    const [editing, setEditing] = useState(false);

    function onSubmit(formValues){
        console.log(formValues)
        updateAccount(formValues,props.user.id)
    }

    if(editing === false){
        return (
            <div> 
                <h4>firstname : {props.user.firstname}</h4>
                <h4>lastname : {props.user.lastname}</h4>
                <h4>username : {props.user.username}</h4>
                <h4>email : {props.user.email}</h4>
                <h4>phone_number : {props.user.phone_number}</h4>
                <h4>birthdate : {props.user.birthdate}</h4>
                <h4>bio : {props.user.bio}</h4>
                <h4>github_link : {props.user.github_link}</h4>
                <h4>linkedin_link : {props.user.linkedin_link}</h4>
                <h4>other_website_links : {props.user.other_website_links}</h4>
                <h4>contact_links : {props.user.contact_links}</h4>
                <div>
                    <button onClick={() => setEditing(true)}>Edit</button>
                </div>
            </div>
        )
    }else{
        return (
            <div> 
                <h1>{props.user.email} </h1>
                <div>
                    <form onSubmit={props.handleSubmit(onSubmit)}>
                        <Field name='firstname' component={CustomField} label='firstname' placeholder={props.user.firstname} type='text'/>
                        <Field name='lastname' component={CustomField} label='lastname' placeholder={props.user.lastname} type='text'/>
                        <Field name='username' component={CustomField} label='username' placeholder={props.user.username} type='text'/>
                        <Field name='email' component={CustomField} label='email' placeholder={props.user.email} type='email'/>
                        <Field name='phone_number' component={CustomField} label='phone_number' placeholder={props.user.phone_number} type='tel'/>
                        <Field name='birthdate' component={CustomField} label='birthdate' placeholder={props.user.birthdate} type='date'/>
                        <Field name='bio' component={CustomField} label='bio' placeholder={props.user.bio} type='text'/>
                        <Field name='github_link' component={CustomField} label='github_link' placeholder={props.user.github_link} type='url'/>
                        <Field name='linkedin_link' component={CustomField} label='linkedin_link' placeholder={props.user.linkedin_link} type='url'/>
                        <Field name='other_website_links' component={CustomField} label='other_website_links' placeholder={props.user.other_website_links} type='url'/>
                        <Field name='contact_links' component={CustomField} label='contact_links' placeholder={props.user.contact_links} type='url'/>
                        <button>UPDATE</button>
                    </form>
                </div>
                <div>
                <div>
                    <button onClick={() => setEditing(false)}>Exit Editing</button>
                </div>
                </div>
            </div>
        )
    }

}

const updateAccount = async (formValues,id) => {
    let response = await fetch(`http://127.0.0.1:8000/api/user-update/${id}`,{
        method:'PATCH',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(formValues)
    })
}

const mapPropsToState = (state) => {
    if(state.auth.state){
        return { user : state.user.state}
    }
}
export default compose(
    reduxForm({
        form: 'profilePage'
    }),
    connect(mapPropsToState)
)(ProfilePage)
