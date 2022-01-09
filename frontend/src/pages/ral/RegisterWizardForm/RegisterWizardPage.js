import React from 'react'
import { Field,reduxForm} from 'redux-form'
import { connect } from 'react-redux';
import { compose } from 'redux'
import { useState } from 'react';
import RegisterWizard1 from './RegisterWizard1';
import RegisterWizard2 from './RegisterWizard2';
import RegisterWizard3 from './RegisterWizard3';
const RegisterWizardPage = () => {

    let [page,setPage] = useState(1)

    const nextPage = () => {
        setPage(page + 1)
    }
    
    const previousPage = () => {
        setPage(page - 1)
    }

    return (
        <div>
            {page === 1 && <RegisterWizard1 onSubmit={() => nextPage()}/> }
            {page === 2 && <RegisterWizard2 onSubmit={() => nextPage()} previousPage={() => previousPage()}/> }
            {page === 3 && <RegisterWizard3 onSubmit={() => nextPage()} previousPage={() => previousPage()}/> }
        </div>
    )
}

export default RegisterWizardPage