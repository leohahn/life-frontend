import React, {PropTypes} from 'react'
import {Router, Route, browserHistory} from 'react-router'
import {Provider} from 'react-redux'
import AppLayout from './AppLayout'
import HomePage from '../containers/HomePage'
import NotFoundPage from '../containers/NotFoundPage'
import LoginPage from '../containers/LoginPage'

if (process.env.NODE_ENV === 'development') {
  require('bootstrap/dist/css/bootstrap.css')
  require('react-redux-toastr/lib/css/react-redux-toastr.css')
}

const routes = (
  <Route path="/" component={AppLayout}>
    <Route path="/home" component={HomePage}/>
    <Route path="/login" component={LoginPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
)

const Root = ({store}) =>
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root
