import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './Header.css'

const Header=()=>{
    return(
        <>
        <Navbar expand="lg" className="navbar">
            <Navbar.Brand><h1 style={{color:"white"}}>Abhishek<span style={{color:"red"}}>Pandey</span></h1></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" style={{backgroundColor:"red"}}/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link className="navLink" style={{color:"white",padding:"5px"}} href="/intro">Introduction</Nav.Link>
                    <Nav.Link className="navLink" style={{color:"white",padding:"5px"}} href="/experience">Experience</Nav.Link>
                    <Nav.Link className="navLink" style={{color:"white",padding:"5px"}} href="/skills">Skills</Nav.Link>
                    <Nav.Link className="navLink" style={{color:"white",padding:"5px"}} href="/gallery">Gallery</Nav.Link>
                    <Nav.Link className="navLink" style={{color:"white",padding:"5px"}} href="/contact">Resume</Nav.Link>
                </Nav>

            </Navbar.Collapse>
        </Navbar>
        </>
    );
};

export default Header;