import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {userLogin} from 'actions/user'
import LoginForm from 'components/LoginForm'

class LoginPage extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    fetching: PropTypes.bool.isRequired
  }

  constructor (props) {
    super(props)
  }

  handleLoginClick (formData) {
    this.props.dispatch(userLogin(formData))
  }

  render () {
    return (
      <LoginForm
        fetching={this.props.fetching}
        onLoginClick={this.handleLoginClick.bind(this)}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  fetching: state.user.status === 'fetching'
})

export default connect(
  mapStateToProps
)(LoginPage)
