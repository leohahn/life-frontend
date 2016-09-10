import { AppContainer } from 'react-hot-loader';
import React from 'react'
import {render} from 'react-dom'
import Root from './components/Root'
import configureStore from './store/configureStore'
import {userLoginSucceeded} from 'actions/user'
import {storage} from 'store/utils'

const store = configureStore()
const rootElement = document.getElementById('root')
const token = storage.get('token')
if (token !== null) {
  store.dispatch(userLoginSucceeded(token.user))
}

render(
  <AppContainer>
    <Root store={store}/>
  </AppContainer>,
  rootElement
)

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    const RootComponent = require('./components/Root').default
    render(
      <AppContainer>
        <RootComponent store={store}/>
      </AppContainer>,
      rootElement
    )
  })
}
