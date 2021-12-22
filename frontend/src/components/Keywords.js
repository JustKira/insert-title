import React from 'react'
import Keyword from './Keyword'

const Keywords = ({ keywords }) => {
    return (
        <ul className='keywords_wrapper'>
            {keywords.map((keyword) => (<Keyword keyword={keyword}/>) )}  
        </ul>
    )
}

export default Keywords
