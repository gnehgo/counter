import React from 'react';
import {Nav, Navbar} from "react-bootstrap";
import {NavLink,} from "react-router-dom";

 function Navibar(){

        return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand>Portfolio CV</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link>
                        <NavLink className="NavLink" to="/">
                            <p1>Home</p1>
                        </NavLink>
                        <NavLink className="NavLink" to="/projects">
                            <p1>Projects </p1>
                        </NavLink>
                        <NavLink className="NavLink" to="/about">
                            <p1>About </p1>
                        </NavLink>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        )
}
export default Navibar;
