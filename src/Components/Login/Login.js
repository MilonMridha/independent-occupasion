import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const navigate = useNavigate();
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    


    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    if (user) {
        navigate(from, { replace: true });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        console.log(email)
        const password = passwordRef.current.value;
        console.log(password);
        signInWithEmailAndPassword(email, password);
        
    }

    return (
        <div className='w-50 mx-auto mt-5'>
            <h3 className='text-center text-danger mb-3'>Please Login!!</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control ref={emailRef} className='rounded-pill shadow' type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control ref={passwordRef} className='rounded-pill shadow' type="password" placeholder="password" />
                </Form.Group>



                <p>{error?.message} </p>
                <Button className='w-50 d-block rounded-pill mx-auto' variant="danger" type="submit">
                    Login
                </Button>
            </Form>
            <p className='text-center mt-2'>New to Travel-Guide? <Link to='/signup' className='text-decoration-none'>Please SignUp.</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;