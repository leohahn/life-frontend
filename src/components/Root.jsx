import React, {PropTypes} from 'react'
import {Router, Route, browserHistory} from 'react-router'
import {Provider} from 'react-redux'
import getRoutes from '../routes'

if (process.env.NODE_ENV === 'development') {
  require('bootstrap/dist/css/bootstrap.css')
  require('react-redux-toastr/lib/css/react-redux-toastr.css')
}

const Root = ({store}) =>
  <Provider store={store}>
    <Router history={browserHistory} routes={getRoutes(store)}/>
  </Provider>

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root
