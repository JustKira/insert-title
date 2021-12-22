import React from 'react'
import Posting from './Posting'

const PostingsList = ({ postings }) => {
    return (
        <div className='postings_wrapper'>
            {postings.map((posting) => (<Posting image={posting.image} 
            title={posting.title} recruiter={posting.recruiter} 
            keywords={posting.skills_needed} paid={posting.paid} last_modified={posting.last_modified}/>) )}  
        </div>
    )
}

export default PostingsList
