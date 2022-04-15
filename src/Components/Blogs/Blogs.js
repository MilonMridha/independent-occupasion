import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className=' container mx-auto mt-4 '>
            <h1 className='text-warning'>My Blogs</h1>
            <h5>Qes no-1: Difference between authorization and authentication?</h5>
            <h5 className='text-danger text-left'>Ans :</h5>
            <div className='row'>
                <div className='auth-one mt-3 blogs col-md-6 col-12 p-4 shadow rounded'>
                    <h5 className='text-primary text-center'>Authorization :</h5>
                    <h6>1. Authorization determines what resources a user can access.</h6>
                    <h6>2. Authorization works through settings that are implemented and maintained by the organization.</h6>
                    <h6>3. Authorization always takes place after authentication.</h6>
                    <h6>4. Authorization isn’t visible to or changeable by the user.</h6>

                </div>
                <div className=' auth-one mt-3 blogs col-md-6 col-12 p-4 shadow rounded  '>
                    <h5 className='text-primary text-center'>Authentication :</h5>
                    <h6>1.Authentication verifies who the user is.</h6>
                    <h6>2. Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.</h6>
                    <h6>3. Authentication is the first step of a good identity and access management process.</h6>
                    <h6>4. Authentication is visible to and partially changeable by the user.</h6>
                </div>
            </div>
            <h5 className='mt-5'>Qes-2: Why are you using firebase? What other options do you have to implement authentication?

</h5>
        </div>
    );
};

export default Blogs;