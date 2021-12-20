import React from 'react'
import DescriptionBlock from '../components/DescriptionBlock'
import DescriptionBlockRev from '../components/DescriptionBlockRev'

const HomePage = () => {
    return (
        <div className='content'>
            <div className='landing'>
                <div className='center'>
                    <input className='landing_text' type="text"/>
                </div>
            </div>
            <div className='landing_desc_wrapper'>
                <DescriptionBlock text='Just insert your title above, and get a collection of internships fitting your criteria and filtered for undergraduates' img='desc1.png' header='Tired of looking for internships'/>
                <DescriptionBlockRev text='Just insert your title above, and get a collection of internships fitting your criteria and filtered for undergraduates' img='desc1.png' header='Tired of looking for internships'/>
            </div>
        </div>
    )
}

export default HomePage