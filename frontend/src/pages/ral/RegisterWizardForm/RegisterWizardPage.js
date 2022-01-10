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
    let [wizardtype,setWizardtype] = useState()

    const nextPage = () => {
        setPage(page + 1)
    }
    
    const previousPage = () => {
        setPage(page - 1)
    }

    const stuForm = () => {
        setWizardtype(0)
    }

    const recForm = () => {
        setWizardtype(1)
    }

    return (
        <div>
            {page === 1 && <RegisterWizard1 onSubmit={() => nextPage()} stu={stuForm} rec={recForm}/>}
            {page === 2 && wizardtype === 0 && <RegisterWizard2 onSubmit={() => nextPage()} previousPage={() => previousPage()}/>  }
            {page === 2 &&  wizardtype === 1 && <RegisterWizard3 onSubmit={() => nextPage()} previousPage={() => previousPage()}/> }
        </div>
    )
}

export default RegisterWizardPage