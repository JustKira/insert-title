import React from 'react'
import Keywords from './Keywords'

const Posting = ({ image, title, recruiter, keywords, paid, last_modified }) => {

    let bg_color = 'white'
    if (paid){
        bg_color = '#D6F3B7'
    }

    return (
        <div className='posting' style={{backgroundColor: bg_color}}>
            <div className='posting_img_wrapper'>
                <img className='posting_img' src={'assets/'+image}/>
            </div>
            <div className='posting_info_wrapper'>
                <p><span className='posting_title'>{title}</span><br/><span className='posting_recruiter'>{recruiter}</span></p>
                <Keywords keywords={keywords}/>
                <p>Last modified: {last_modified}</p>
            </div>
            <div className='posting_info2_wrapper'>
            </div>

        </div>
    )
}

export default Posting
