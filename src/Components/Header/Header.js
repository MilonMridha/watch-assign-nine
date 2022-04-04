import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import  CustomLink  from '../CustomLink/CustomLink'

const Header = () => {
    return (
        <div>
            <Navbar className='rounded' bg="primary" expand="lg">
                <Container>
                    <Navbar.Brand href="#home" className='text-dark' > <h3>Review My <span className='text-warning'>Watch</span></h3> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">


                        <Nav className="ms-auto 'text-light'">
                            <CustomLink to="/"  >Home</CustomLink>
                            <CustomLink to="/review" className='ms-3'>Reviews</CustomLink>
                            <CustomLink to="/dashboard" className='ms-3'>Dashboard</CustomLink>
                            <CustomLink to="/blogs" className='ms-3'>Blogs</CustomLink>
                            <CustomLink to="/about" className='ms-3'>About</CustomLink>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;