import React from 'react'
import { Field, reduxForm } from 'redux-form'

const RegisterWizard1 = (props) => {

    const {handleSubmit} = props

    function rFieldInput({input,label}) {
        return (
            <div>
                <label>{label}</label>
                <input {...input}/>
            </div>
        )
    }

    function rICONFieldInput({input,label}) {
        return (
            <div>
                <label>{label}</label>
                <input {...input}/>
            </div>
        )
    }
    return (
        <div>
            <h1>Page 1</h1>
            <form onSubmit={handleSubmit}>
            <Field
                name="firstName"
                type="text"
                component={rICONFieldInput}
                label="First Name"
            />
            <Field
                name="lastName"
                type="text"
                component={rFieldInput}
                label="Last Name"
            />
            <div>
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
  })(RegisterWizard1)
