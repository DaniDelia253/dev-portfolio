import React from "react";
import { Navbar, Nav } from 'react-bootstrap'


function Navigation() {

    return (

        <Navbar className='navBar' id='home'>
            <Navbar.Brand href='#home' className='navBarBrand'>Dani Davis</Navbar.Brand>
            <Nav className='navBarLinkList'>
                <Nav.Link href="#about" className='navBarLink'>About Me</Nav.Link>
                <Nav.Link href="#work" className='navBarLink'>My Work</Nav.Link>
                <Nav.Link href="#contact" className='navBarLink'>Contact Me</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default Navigation