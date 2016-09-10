import React from 'react'
import {connect} from 'react-redux'
import {userLogin} from 'actions/user'
import LoginForm from 'components/LoginForm'

class LoginPage extends React.Component {
  constructor (props) {
    super(props)
  }

  handleLoginClick (formData) {
    this.props.dispatch(userLogin(formData))
  }

  render () {
    return <LoginForm onLoginClick={this.handleLoginClick.bind(this)}/>
  }
}

export default connect()(LoginPage)
