import React, { useContext } from 'react'
import SRContext from '../context/ral/SRContext'

const SRPage = () => {
    let { createStudent, createRecruiter } = useContext(SRContext)
    return (
        <div>
            <div>
                <form onSubmit={createStudent}>
                    <input type='text' name='undergraduate_year' placeholder='Enter email'/>
                    <input type='text' name='phone_number' placeholder='Enter Password'/>
                    <input type='text' name='brithdate' placeholder='Enter Password'/>
                    <input type='submit' className='submitbtn'/>
                </form>
            </div>
            <div>
                <form onSubmit={createRecruiter}>
                    <input type='text' name='undergraduate_year' placeholder='Enter email'/>
                    <input type='text' name='phone_number' placeholder='Enter Password'/>
                    <input type='text' name='bio' placeholder='Enter Password'/>
                    <input type='submit' className='submitbtn'/>
                </form>
            </div>
        </div>
    )
}

export default SRPage
