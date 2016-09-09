import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import LoggedInNavbar from 'components/LoggedInNavbar'
import LoggedOutNavbar from 'components/LoggedOutNavbar'

class LifeNavbar extends React.Component {
  static propTypes = {
    username: PropTypes.string
  }

  render () {
    const {username} = this.props
    return username
      ? <LoggedInNavbar username={username}/>
      : <LoggedOutNavbar/>
  }
}

function mapStateToProps ({ user }) {
  return {
    username: user.loggedIn ? user.data.username : undefined
  }
}

export default connect(
  mapStateToProps
)(LifeNavbar)
