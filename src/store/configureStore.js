import createSagaMiddleware from 'redux-saga'
import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from 'reducers/index'
import rootSaga from 'sagas/index'


const sagaMiddleware = createSagaMiddleware()
const enhancers = compose(
  applyMiddleware(sagaMiddleware),
  window.devToolsExtension && window.devToolsExtension()
)

export default function configureStore (initialState) {
  const store = initialState
    ? createStore(rootReducer, initialState, enhancers)
    : createStore(rootReducer, enhancers)

  sagaMiddleware.run(rootSaga)

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(require('../reducers/index').default)
    })
  }

  return store
}
