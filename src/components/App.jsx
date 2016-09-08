import React from 'react'
import {connect} from 'react-redux'
import Button from 'react-bootstrap/lib/Button'
import LifeNavbar from './LifeNavbar'

class App extends React.Component {
  render () {
    return (
      <div>
        <LifeNavbar></LifeNavbar>
        <div>{this.props.loggedIn ? "IN BRUXO :D" : "NOT LOGGED IN :((("}</div>
        <Button onClick={() => alert('HELLO MY FRIEND!')}>HEy</Button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    loggedIn: state.user.loggedIn
  }
}

export default connect(
  mapStateToProps
)(App)
