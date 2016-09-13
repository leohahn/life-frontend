import React, {PropTypes} from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Link} from 'react-router'
import Navbar from 'react-bootstrap/lib/Navbar'
import Nav from 'react-bootstrap/lib/Nav'
import NavItem from 'react-bootstrap/lib/NavItem'
import NavDropdown from 'react-bootstrap/lib/NavDropdown'
import MenuItem from 'react-bootstrap/lib/MenuItem'

class LoggedInNavbar extends React.Component {
  static propTypes = {
    username: PropTypes.string.isRequired,
    onLogoutClick: PropTypes.func.isRequired,
    pathname: PropTypes.string.isRequired
  }

  render () {
    const {username, onLogoutClick, pathname} = this.props
    return (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Life</Link>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to="/">
              <NavItem active={pathname === '/' ? true : false}>
                Home
              </NavItem>
            </LinkContainer>
          </Nav>
          <Nav pullRight>
            <NavDropdown title={username} id="user-dropdown">
              <MenuItem onClick={() => alert('TODO: Delete acccount')}>Delete Account</MenuItem>
              <MenuItem onClick={() => onLogoutClick()}>Logout</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default LoggedInNavbar
