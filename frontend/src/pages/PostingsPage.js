import React from 'react'
import PostingsList from '../components/PostingsList'

const PostingsPage = () => {

    let postings = []
    
    const onChange = () => {

    }

    const filter = ()=>{
        //TODO Add filtering and request to django
        postings = [
            {
                image:'desc1.png',
                title:'Engineering Job',
                recruiter:'Very Kind Recruiter',
                skills_needed:['Python', 'PHP', 'HAHA'],
                paid:true,
                last_modified:'Monday, 22 December, 2021'
            },
            {
                image:'desc1.png',
                title:'Engineering Job',
                recruiter:'Very Kind Recruiter',
                skills_needed:['Python', 'PHP', 'HAHA'],
                paid:false,
                last_modified:'Monday, 22 December, 2021'
            }
        ]
    }
    filter()

    return (
        <div className='content postings_page'>
            <div id='posting_list_wrapper'>
                <PostingsList postings={postings}/>
            </div>
            <div className='filter_wrapper'>
                <form onChange={onChange}>
                    <input type='text'></input>
                    <label>Placeholder label</label>
                    <button>Placeholder</button>
                    <label>Placeholder label</label>
                    <button>Placeholder</button>
                    <label>Placeholder label</label>
                    <button>Placeholder</button>
                </form>
            </div>
        </div>
    )
}

export default PostingsPage
