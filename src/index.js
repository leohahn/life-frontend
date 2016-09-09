import { AppContainer } from 'react-hot-loader';
import React from 'react'
import {render} from 'react-dom'
import Root from './components/Root'
import configureStore from './store/configureStore'

const store = configureStore()

const rootElement = document.getElementById('root')
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
