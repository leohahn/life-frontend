import React from 'react'
import {Provider} from 'react-redux'
import App from './App'

if (process.env.NODE_ENV === 'development') {
  require('bootstrap/dist/css/bootstrap.css')
}

export default ({store}) =>
  <Provider store={store}>
    <App/>
  </Provider>
