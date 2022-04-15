import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const Guides = ({ guide }) => {
    const { name, image, hire, detail } = guide;
    const navigate = useNavigate();
    const goCheckOut = () =>{
        navigate('/checkout')
    }
    return (
        <div className='container'>
            <Card className='shadow rounded' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title> {name}</Card.Title>
                    <Card.Text>
                        {detail}
                    </Card.Text>
                    <h6>Price : ${hire}</h6>
                    <Button onClick={goCheckOut} variant="dark rounded-pill w-100">Go Checkout</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Guides;