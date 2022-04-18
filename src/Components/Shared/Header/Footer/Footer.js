import React from 'react';
import copyright from '../../../../Image/copyright.png'
import google from '../../../../Social-icon/google.png'
import facebook from '../../../../Social-icon/facebook .png'
import github from '../../../../Social-icon/github.png'

const Footer = () => {
    return (
        <div className='bg-dark mt-2 rounded'>
            <div className='p-3 pt-4'>
                <h6 className='text-light'>My Community</h6>
                <h6 className='text-light'>Help Center</h6>
                <h6 className='text-light'>Athor</h6>
                <h6 className='text-light'>Stay Connected</h6>
                <div>
                    <span><img src={google} alt="" /></span>
                    <span className='ms-3'><img src={facebook} alt="" /></span>
                    <span className='ms-3'><img src={github} alt="" /></span>
                </div>
                <small className='text-light'> <span><img src={copyright} alt="" /></span> 2022 Envato Pty Ltd. Trademarks and brands are the property of their respective owners.</small>

            </div>
                

        </div>
    );
};

export default Footer;