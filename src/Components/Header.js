import React from 'react'

import {LinkContainer} from 'react-router-bootstrap'
import {Nav,Navbar,Container} from 'react-bootstrap';
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Header = () => {
    return (
        <header>
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect fixed="top">
          
  {/* <Navbar.Brand>ProShop</Navbar.Brand> */}

  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
    <AnchorLink href='#about'>
      <Nav.Link>About Me</Nav.Link>
      </AnchorLink>
    <AnchorLink href='#skills'>
      <Nav.Link>Skills</Nav.Link>
      </AnchorLink>
    <AnchorLink href='#experiences'>
      <Nav.Link>Experiences</Nav.Link>
      </AnchorLink>
    <AnchorLink href='#projects'>
      <Nav.Link>Projects</Nav.Link>
      </AnchorLink>
    <AnchorLink href='#education'>
      <Nav.Link>Education</Nav.Link>
      </AnchorLink>
    <AnchorLink href='#contact'>
      <Nav.Link>Contact</Nav.Link>
      </AnchorLink>
     
   
   
   
   
   
    </Nav>
   
  </Navbar.Collapse>
 
</Navbar>    
        </header>
    )
}

export default Header