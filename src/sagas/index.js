import {userLoginSaga, userCreateSaga} from 'sagas/user'

// ------------------------------------
// Root Saga (Combines all sagas together)
// ------------------------------------
export default function * rootSaga () {
  yield [
    userLoginSaga(),
    userCreateSaga()
  ]
}
