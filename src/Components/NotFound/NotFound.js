import React from 'react';

import CustomLink from '../Shared/Header/CustomActive/CustomActive';
import './NotFound.css'
import notfound from './notfound.png';

const NotFound = () => {
    return (
        <div className='container mt-4'>
            <CustomLink className='btn btn-success text-light text-left' to='/'> Go to Home</CustomLink>
            <div className=' image mx-auto mt-3 pb-3 row row-cols-1 row-cols-md-1 mb-5 '>
                <img  className='shadow img-fluid mx-auto rounded-pill' src={notfound} alt="" />

            </div>
            
        </div>
 
    );
};

export default NotFound;