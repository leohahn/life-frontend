import React, {PropTypes} from 'react'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import FormControl from 'react-bootstrap/lib/FormControl'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import Button from 'react-bootstrap/lib/Button'

class RegisterForm extends React.Component {
  static propTypes = {
    onRegisterClick: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange (property, event) {
    this.setState({
      [property]: event.target.value
    })
  }

  handleClick () {
    this.props.onRegisterClick(this.state)
  }

  render () {
    const {fetching} = this.props
    return (
      <form>
        <FormGroup controlId="username">
          <ControlLabel>Username</ControlLabel>
          <FormControl
            type="text"
            value={this.state.username}
            placeholder="Enter your username..."
            onChange={this.handleChange.bind(this, 'username')}
          />
        </FormGroup>
        <FormGroup controlId="username">
          <ControlLabel>Password</ControlLabel>
          <FormControl
            type="password"
            value={this.state.password}
            placeholder="Enter your password..."
            onChange={this.handleChange.bind(this, 'password')}
          />
        </FormGroup>
        <Button
          bsStyle="success"
          onClick={this.handleClick.bind(this)}
        >
          Register
        </Button>
      </form>
    )
  }
}

export default RegisterForm
