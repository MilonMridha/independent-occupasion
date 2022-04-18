import React from 'react';
import { Button, Form } from 'react-bootstrap';
import Footer from '../Shared/Header/Footer/Footer';

const CheckOut = () => {
    return (
        <div >
            <div className='w-50 mx-auto mt-5 mb-5'>
                <h3 className='text-danger mb-4'>Welcome To Checout Page</h3>
                <Form className='shadow rounded p-3'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="Name" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="Address" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="Select pakage" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="Enter contact" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="text" placeholder="Booking" required />
                    </Form.Group>

                    <Button className='w-50 d-block rounded-pill mx-auto' variant="danger" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
                <Footer></Footer>
        </div>
    );
};

export default CheckOut;