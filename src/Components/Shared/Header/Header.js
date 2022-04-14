import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import CustomLink from './CustomActive/CustomActive';

const Header = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const logout = () => {
    signOut(auth);
    navigate('/login');
  };
  
    return (
        <div>
            <Navbar className='rounded'  bg="primary" expand="lg">
  <Container>
    <Navbar.Brand href="#home" className='text-light' > <h2>A Perfect Tour Guide</h2> </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
    <Navbar.Collapse id="basic-navbar-nav" className=''>
      
      
      <Nav className="ms-auto 'text-light '">
        <CustomLink to="/"  >Home</CustomLink>
        <CustomLink to="/Checkout" className='ms-3'>Checkout</CustomLink>
        <CustomLink to="/blogs" className='ms-3'>Blogs</CustomLink>
        <CustomLink to="/about" className='ms-3'>About us</CustomLink>

        { user? 
        <Button onClick={logout} className='btn btn-danger rounded-pill p-1 ms-2 text-decoration-none'>SignOut</Button>
        :
          <CustomLink to="/login" className='ms-3'>Login</CustomLink>
          
          }
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;