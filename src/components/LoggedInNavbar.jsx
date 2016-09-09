import React from 'react'
import {Link} from 'react-router'
import Navbar from 'react-bootstrap/lib/Navbar'
import Nav from 'react-bootstrap/lib/Nav'
import NavItem from 'react-bootstrap/lib/NavItem'

const LoggedInNavbar = ({ username }) =>
  <Navbar inverse>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">Life</Link>
      </Navbar.Brand>
      <Navbar.Toggle/>
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="#">Home</NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={2} href="#">{username}</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>

export default LoggedInNavbar
