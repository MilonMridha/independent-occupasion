import React, { useRef } from 'react';
import { Button, Form, Toast } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Header/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const navigate = useNavigate();
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        hookError,
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
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('Enter your true email address');
        }

    }
    if (loading || sending) {
        return <Loading></Loading>
    }

    return (
        <div className='w-50 mx-auto mt-5'>
            <h3 className='text-center text-danger mb-3'>Please Login!!</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control ref={emailRef} className='rounded-pill shadow pb-2' type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control ref={passwordRef} className='rounded-pill shadow pb-2' type="password" placeholder="password" required />
                </Form.Group>



                <p>{hookError?.message} </p>
                <Button className='w-50 d-block rounded-pill mx-auto' variant="danger" type="submit">
                    Login
                </Button>
            </Form>
            <p className='text-center mt-2'>New to Travel-Guide? <Link to='/signup' className='text-decoration-none'>Please SignUp.</Link></p>
            <p className='text-center'>Forget Password ? <button className='text-primary text-decoration-none p-0 btn btn-link' onClick={resetPassword}> Reset password</button></p>

            <SocialLogin></SocialLogin>
            <ToastContainer></ToastContainer>

        </div>
    );
};

export default Login;