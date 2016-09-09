import {createStore} from 'redux'
import rootReducer from '../reducers'

export default function configureStore (initialState) {
  let store
  if (initialState) {
    store = createStore(rootReducer, initialState,
      window.devToolsExtension && window.devToolsExtension()
    )
  } else {
    store = createStore(rootReducer,
      window.devToolsExtension && window.devToolsExtension()
    )
  }

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(require('../reducers/index').default)
    })
  }

  return store
}
