import React from 'react'
import DescriptionBlock from '../components/DescriptionBlock'
import DescriptionBlockRev from '../components/DescriptionBlockRev'

const HomePage = () => {
    let names = ['Doctor', 'Engineer', 'Programmer', 'YOU']
    let landing_animation = ()=>{
        console.log('here')
        setInterval(async ()=>{
        const e = document.getElementById('landing_text')
        names.forEach(async (name, index)=>{
            setTimeout(()=>{e.value = name}, index*1000)
        })
    },10000);
    }
    landing_animation()

    return (
        <div className='content'>
            <div className='landing'>
                <div className='center'>
                    <div className='landing_textblock'>
                        <label className='landing_textlabel'>INSERT</label>
                        <input id='landing_text' type="text"/>
                    </div>
                </div>
            </div>
            <div className='landing_slogan'>
                <h2>"Committed to making our ever-evolving job market ever-easier to enter"</h2>
            </div>
            <div className='landing_desc_wrapper'>
                <DescriptionBlock text='Just insert your title above, and get a collection of internships fitting your criteria and filtered for undergraduates' img='desc1.png' header='Tired of looking for internships'/>
                <DescriptionBlockRev text='Just insert your title above, and get a collection of internships fitting your criteria and filtered for undergraduates' img='desc1.png' header='Tired of looking for internships'/>
            </div>
        </div>
    )
}

export default HomePage