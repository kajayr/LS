import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import './styles/Home.css'

export const Header = () => {
  return (

<Navbar  variant="dark" expand="lg" className="nav">
    <LinkContainer to="/">
<Navbar.Brand>Leo Sinani</Navbar.Brand>
</LinkContainer>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
<Nav className="mr-auto">
<LinkContainer to="/">
<Nav.Link>Home</Nav.Link>
</LinkContainer>
<LinkContainer to="/experience">
<Nav.Link>Work Experience</Nav.Link>
</LinkContainer>
<LinkContainer to="/projects">
<Nav.Link>Projects</Nav.Link>
</LinkContainer>
<LinkContainer to="/education">
<Nav.Link>Education</Nav.Link>
</LinkContainer>
</Nav>
</Navbar.Collapse>
</Navbar>
  );
}