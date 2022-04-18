import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import CustomLink from './CustomActive/CustomActive';
import logo from '../../../Social-icon/travelguide.png'


const Header = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const logout = () => {
    signOut(auth);
    navigate('/login');
  };
  
    return (
        <div>
            <Navbar className='rounded p-0' sticky='top'   bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home" className='text-danger' > <h2>A Travel Guide <span><img src={logo} alt="" /></span></h2> </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
    <Navbar.Collapse id="basic-navbar-nav" className=''>
      
      
      <Nav className="ms-auto">
        <CustomLink className='text-danger'  to="/"  >Home</CustomLink>
        <CustomLink to="/Checkout" className='ms-3 text-danger'>Checkout</CustomLink>
        <CustomLink to="/blogs" className='ms-3 text-danger'>Blogs</CustomLink>
        <CustomLink to="/about" className='ms-3 text-danger'>About</CustomLink>

        { user? 
        <Button onClick={logout} className='btn btn-danger rounded-pill p-1 ms-2 text-decoration-none'>SignOut</Button>
        :
          <CustomLink to="/login" className='ms-3 text-danger'>Login</CustomLink>
          
          }
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;