import React from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import googleIcon from '../../Social-icon/google.png';
import githubIcon from '../../Social-icon/github.png';
import facebook from '../../Social-icon/facebook .png';

const SocialLogin = () => {
    const [signInWithGoogle,user] = useSignInWithGoogle(auth);
    const [signInWithGithub,githubUser] = useSignInWithGithub(auth);
    const [signInWithFacebook,facebookUser] = useSignInWithGithub(auth);
    
    const navigate = useNavigate();
    if(user || githubUser || facebookUser){
        navigate('/');
    }
    return (
        <div>
            <div>
                <Button onClick={()=>signInWithGoogle()} className='btn btn-dark rounded-pill w-50 d-block mx-auto mb-2'> <span><img src={googleIcon} alt="" /></span> Google LogIn</Button>
                
                <Button onClick={()=>signInWithGithub()} className='btn btn-dark rounded-pill w-50 d-block mx-auto'> <span><img src={githubIcon} alt="" /></span> Github LogIn</Button>
                
                <Button onClick={()=>signInWithFacebook()} className='btn btn-dark rounded-pill w-50 d-block mx-auto mt-2'> <span><img src={facebook} alt="" /></span> Facebook LogIn</Button>
            </div>
        </div>
    );
};

export default SocialLogin;