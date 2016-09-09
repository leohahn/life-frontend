import React, {PropTypes} from 'react'
import {Router, Route, browserHistory} from 'react-router'
import {Provider} from 'react-redux'
import AppLayout from './AppLayout'
import HomePage from '../containers/HomePage'
import NotFoundPage from '../containers/NotFoundPage'

if (process.env.NODE_ENV === 'development') {
  require('bootstrap/dist/css/bootstrap.css')
}

const Root = ({store}) =>
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={AppLayout}>
        <Route path="/home" component={HomePage}></Route>
        <Route path="*" component={NotFoundPage}></Route>
      </Route>
    </Router>
  </Provider>

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root
