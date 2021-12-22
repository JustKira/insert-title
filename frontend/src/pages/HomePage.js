import React from 'react'
import DescriptionBlock from '../components/DescriptionBlock'
import DescriptionBlockRev from '../components/DescriptionBlockRev'
import { Link } from 'react-router-dom';

const HomePage = () => {
    let names = ['Doctor', 'Engineer', 'Programmer', 'YOU']
    let landing_animation = ()=>{
        console.log('here')
        setInterval(async ()=>{
        const e = document.getElementById('landing_text')
        if (e == null){
            return;}
        names.forEach(async (name, index)=>{
            try{
                setTimeout(()=>{e.value = name}, index*2000)
            }catch{

            }
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
                <DescriptionBlockRev text='Send requests to our certified internship providers and get access to a world of opportunities' img='desc2.png' header='Request internships directly from recruiters!'/>
                <DescriptionBlock text="Get a customized roadmap for the career you've set your eyes on! Everything from required skills to popular frameworks to soft skills needed for the profession" img='desc3.png' header='Build your career'/>
                <DescriptionBlockRev text='Create your own resume/CV through our free user-friendly CV builder. With customized templates for standardized applications' img='desc4.png' header='Create your own sleek CV'/>
            </div>
            <div className='landing_final_wrapper'>
                <h2>College life is hard and internships aren't easy work either. Don't waste your energy and time looking for them.</h2>
                <Link to="/register"><button className='landing_final_btn'>Join us now!</button> </Link>
            </div>
        </div>
    )
}

export default HomePage