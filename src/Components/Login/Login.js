import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='w-50 mx-auto mt-5'>
                <h3 className='text-center text-danger mb-3'>Please Login!!</h3>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">

                        <Form.Control className='rounded-pill shadow' type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">

                        <Form.Control className='rounded-pill shadow' type="password" placeholder="Password" />
                    </Form.Group>

                    
                    <Button className='w-50 d-block rounded-pill mx-auto' variant="danger" type="submit">
                    Login
                    </Button>
                </Form>
                <p className='text-center mt-2'>New to Travel-Guide? <Link to='/signup' className='text-decoration-none'>Please SignUp.</Link></p>
            </div>
    );
};

export default Login;