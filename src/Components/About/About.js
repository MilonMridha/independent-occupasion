import React from 'react';
import myimage from '../About/mymage/my.jpg'
import './About.css'
const About = () => {
    return (
        <div className='mt-5 container shadow p-4 rounded'>
            <h1 className='text-danger'><span className='text-warning'>Me</span> and <span className='text-primary'>my goal</span> </h1>
            <img className='my-image mt-5' src={myimage} alt="" />
            <h2 className='mt-3'>I am <span className='text-primary'>Milon Mridha</span></h2>
            <p>“If you want to be happy, set a goal that commands your thoughts, liberates your energy and inspires your hopes.” -Andrew Carnegie. 
                <h5>goals + commitment = dreams come true</h5>By having clear goals, I become aware of precisely what I want to achieve and how to go about doing it. I am  able to more accurately assess and measure my ability to accomplish the goals and most importantly, I have a plan that can guide I along the way and keep you on track.My final goal is to become a web developer in next one month. And I beleive that I try my best of my ability for hard working. In this way I will sacrifies all my pleasure things for become a web developer.  For this reason I doing my daily task timely and spend  12 hours in my study.I dam beleive that oneday I achieve my goal. May Allah help me.....
            </p>
        </div>
    );
};

export default About;