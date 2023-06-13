import React from 'react';
import {Nav, Navbar, Button} from "react-bootstrap";
import {Link} from "react-router-dom";

 function Navibar(){

        return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand>Portfolio CV</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link>
                        <Link className="text-decoration-none text-white me-2" to="/">
                            <p1>Home</p1>
                        </Link>
                        <Link className="text-decoration-none text-white me-2" to="/projects">
                            <p1>Projects </p1>
                        </Link>
                        <Link className="text-decoration-none text-white" to="/about">
                            <p1>About </p1>
                        </Link>
                    </Nav.Link>
                </Nav>
                <Nav>
                    <Button className="me-2 primary">Log in</Button>
                    <Button ClassName="primary ">Sign in</Button>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
        )
}
export default Navibar;
