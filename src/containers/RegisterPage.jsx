import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import RegisterForm from 'components/RegisterForm'
import {userCreate} from 'actions/user'

class RegisterPage extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  onRegisterClick (registerData) {
    this.props.dispatch(userCreate(registerData))
  }

  render () {
    return (
      <RegisterForm onRegisterClick={this.onRegisterClick.bind(this)}/>
    )
  }
}

export default connect()(RegisterPage)
