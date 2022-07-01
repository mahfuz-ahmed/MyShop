import React from 'react';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import  "../TopNav/topNav.css"

const TopNav = () => {
  const {user,logOut}=useAuth();
    return (
      <Navbar className='sticky-top' collapseOnSelect expand="lg" bg="dark" variant="dark" >
        <Container>
          <Navbar.Brand as={Link} to="/home">MyShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link as={Link} to={"/shop"}>Shop</Nav.Link>     
            </Nav>
            <Nav>
            { user.email &&
              <span className='m-2 ' style={{color:"white"}}>{user.displayName} {}</span>
              
            }
              {
                user.email ?
                <button className='btn btn-danger' onClick={logOut}>logout</button>
                
                :
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
              }
                                 
            </Nav>
          </Navbar.Collapse>
        </Container>
    </Navbar>
    );
};

export default TopNav;