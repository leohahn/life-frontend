import React from 'react'
import {Link, browserHistory} from 'react-router'
import Navbar from 'react-bootstrap/lib/Navbar'
import Nav from 'react-bootstrap/lib/Nav'
import NavItem from 'react-bootstrap/lib/NavItem'

function redirectLogin () {
  browserHistory.push('/login')
}

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
        <NavItem active={pathname === '/login' ? true : false}
                 onClick={redirectLogin}>
          Login
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>

export default LoggedOutNavbar
