import React from 'react'

const DescriptionBlock = ({ text, header, img }) => {
    return (
        <div className='landing_desc'>
            <div className='desc_text_wrapper'>
                <span className='desc_text'>
                    <h3>{header}</h3>
                    <p >{text}</p>
                </span>
            </div>
            <div className='desc_image'>
                <img className='desc_image' src={'assets/'+img} />
            </div>
        </div>
    )
}

export default DescriptionBlock
