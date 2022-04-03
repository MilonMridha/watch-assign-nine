import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar className='rounded' bg="warning" expand="lg">
                <Container>
                    <Navbar.Brand href="#home" className='text-dark' > <h3>Review My Watch</h3> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className=''>


                        <Nav className="ms-auto 'text-light'">
                            <Link to="/"  >Home</Link>
                            <Link to="/review" className='ms-3'>Reviews</Link>
                            <Link to="/dashboard" className='ms-3'>Dashboard</Link>
                            <Link to="/blogs" className='ms-3'>Blogs</Link>
                            <Link to="/about" className='ms-3'>About</Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;