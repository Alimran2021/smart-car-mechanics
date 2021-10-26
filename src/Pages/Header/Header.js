import React from 'react';
import { Container, Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';


const Header = () => {
    const { user, logOut } = useAuth()
    return (
        <div>
            <Navbar sticky="top" style={{ backgroundColor: 'rgb(255, 233, 248)' }} expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">Smart Service</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#services">Service</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#experts">Experts</Nav.Link>
                            {
                                user?.email ? <Button onClick={logOut}>logOut</Button>
                                    :
                                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            }
                            <NavDropdown title="Contact" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    {user?.email && user.displayName}
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-info">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>

    );
};

export default Header;