import {createStore} from 'redux'
import rootReducer from '../reducers'

export default function configureStore (initialState) {
  const store = createStore(rootReducer, initialState,
    window.devToolsExtension && window.devToolsExtension()
  )

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(require('../reducers/index').default)
    })
  }

  return store
}
