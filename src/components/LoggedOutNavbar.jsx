import React from 'react'
import {Link, browserHistory} from 'react-router'
import {LinkContainer} from 'react-router-bootstrap'
import Navbar from 'react-bootstrap/lib/Navbar'
import Nav from 'react-bootstrap/lib/Nav'
import NavItem from 'react-bootstrap/lib/NavItem'


const LoggedOutNavbar = ({ pathname }) =>
  <Navbar inverse>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">Life</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <LinkContainer to="/login">
          <NavItem active={pathname === '/login' ? true : false}>
            Login
          </NavItem>
        </LinkContainer>
        <LinkContainer to="/register">
          <NavItem active={pathname === '/register' ? true : false}>
            Register
          </NavItem>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>

export default LoggedOutNavbar
