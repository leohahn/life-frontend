import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import LoggedInNavbar from 'components/LoggedInNavbar'
import LoggedOutNavbar from 'components/LoggedOutNavbar'
import {userLogout} from 'actions/user'
import {storage} from 'store/utils'

class LifeNavbar extends React.Component {
  static propTypes = {
    username: PropTypes.string,
    pathname: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  onLogoutClick () {
    const token = storage.get('token')
    this.props.dispatch(userLogout(token.jwt))
  }

  render () {
    const {username, pathname} = this.props

    return username
      ? <LoggedInNavbar
          pathname={pathname}
          username={username}
          onLogoutClick={this.onLogoutClick.bind(this)}
        />
      : <LoggedOutNavbar pathname={pathname}/>
  }
}

const mapStateToProps = ({ user }) => ({
  username: user.loggedIn ? user.data.username : undefined
})

export default withRouter(connect(
  mapStateToProps
)(LifeNavbar))
