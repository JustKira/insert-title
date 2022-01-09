import React from 'react'
import { Field, reduxForm } from 'redux-form'

const RegisterWizard3 = (props) => {

    const {handleSubmit , previousPage } = props

    function rFieldInput({input,label}) {
        return (
            <div>
                <label>{label}</label>
                <input {...input}/>
            </div>
        )
    }

    return (
        <div>
            <h1>Page 3</h1>
            <form onSubmit={handleSubmit}>
            <Field
                name="firstName"
                type="text"
                component={rFieldInput}
                label="First Name"
            />
            <Field
                name="lastName"
                type="text"
                component={rFieldInput}
                label="Last Name"
            />
            <div>
                <button type="button" onClick={previousPage}>
                Previous
                </button>                
                <button type="submit">
                Next
                </button>
            </div>
            </form>            
        </div>
    )
}

export default reduxForm({
    form: 'wizard', // <------ same form name
    destroyOnUnmount: false, // <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  })(RegisterWizard3)
