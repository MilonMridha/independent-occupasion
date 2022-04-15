import React from 'react';
import notfound from './notfound.png';

const NotFound = () => {
    return (
        <div className='mt-5'>
            <img className='shadow rounded-circle' src={notfound} alt="" />
        </div>
    );
};

export default NotFound;