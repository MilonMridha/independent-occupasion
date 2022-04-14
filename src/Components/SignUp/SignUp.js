import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const SignUp = () => {

    const emailRef = useRef('');
    const nameRef = useRef('');
    const passwordRef = useRef('');
    const confirmPasswordRef = useRef('');
const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      

const handleFormSubmit = event =>{
    event.preventDefault();

    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;
    createUserWithEmailAndPassword(email,password)
    navigate('/login')
}
    return (
        <div className='w-50 mx-auto mt-5'>
                <h3 className='text-center text-danger mb-3'>Please SignUp!!</h3>
                <Form onSubmit={handleFormSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">

                        <Form.Control ref={nameRef} className='rounded-pill' type="text" placeholder="Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">

                        <Form.Control ref={emailRef} className='rounded-pill' type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">

                        <Form.Control ref={passwordRef} className='rounded-pill' type="password" placeholder="Password" />
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formBasicPassword">

                        <Form.Control ref={confirmPasswordRef} className='rounded-pill' type="password" placeholder="Confirm Password" />
                    </Form.Group>

                    
                    <Button className='w-50 d-block rounded-pill mx-auto' variant="danger" type="submit">
                    SignUp
                    </Button>
                </Form>
                <p className='text-center mt-2'>Already User? <Link to='/login' className='text-decoration-none'>Please Login</Link></p>
            </div>
    );
};

export default SignUp;