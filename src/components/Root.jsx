import React, {PropTypes} from 'react'
import {Router, Route, browserHistory} from 'react-router'
import {Provider} from 'react-redux'
import getRoutes from '../routes'
import {setupWebsocket} from 'api/index'
import wsConnection from 'wsConnection'

if (process.env.NODE_ENV === 'development') {
  require('bootstrap/dist/css/bootstrap.css')
  require('react-redux-toastr/lib/css/react-redux-toastr.css')
}

class Root extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  }

  constructor (props) {
    super(props)
    wsConnection.connect()
  }

  render () {
    return (
      <Provider store={this.props.store}>
        <Router history={browserHistory} routes={getRoutes(this.props.store)}/>
      </Provider>
    )
  }
}

export default Root
