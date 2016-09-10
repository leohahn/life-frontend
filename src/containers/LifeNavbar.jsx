import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import LoggedInNavbar from 'components/LoggedInNavbar'
import LoggedOutNavbar from 'components/LoggedOutNavbar'

class LifeNavbar extends React.Component {
  static propTypes = {
    username: PropTypes.string,
    pathname: PropTypes.string
  }

  render () {
    const {username, pathname} = this.props

    return username
      ? <LoggedInNavbar pathname={pathname} username={username}/>
      : <LoggedOutNavbar pathname={pathname}/>
  }
}

function mapStateToProps ({ user }) {
  return {
    username: user.loggedIn ? user.data.username : undefined
  }
}

export default withRouter(connect(
  mapStateToProps
)(LifeNavbar))
