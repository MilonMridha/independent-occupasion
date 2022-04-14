import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import CustomLink from './CustomActive/CustomActive';

const Header = () => {
    return (
        <div>
            <Navbar className='rounded'  bg="primary" expand="lg">
  <Container>
    <Navbar.Brand href="#home" className='text-light' > <h2>A Perfect Tour Guide</h2> </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
    <Navbar.Collapse id="basic-navbar-nav" className=''>
      
      
      <Nav className="ms-auto 'text-light'">
        <CustomLink to="/"  >Home</CustomLink>
        <CustomLink to="/Checkout" className='ms-3'>Checkout</CustomLink>
        <CustomLink to="/blogs" className='ms-3'>Blogs</CustomLink>
        <CustomLink to="/about" className='ms-3'>About us</CustomLink>
        <CustomLink to="/login" className='ms-3'>Login</CustomLink>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;