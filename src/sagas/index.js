import {takeLatest} from 'redux-saga'
import {put, call, apply} from 'redux-saga/effects'
import {toastr} from 'react-redux-toastr'
import {USER_LOGIN} from 'constants/user'
import {userLoginSucceeded, userLoginRequested, userLoginFailed} from 'actions/user'
import * as API from 'api'
import {storage} from 'store/utils'

// ------------------------------------
// User Login Saga
// ------------------------------------
function * userLogin (action) {
  try {
    yield put(userLoginRequested())
    const data = yield call(API.login, action.payload)
    if (data.status === 'ok') {
      yield put(userLoginSucceeded(data.payload.user))
      yield call(toastr.success, 'Login Succeeded')
      yield call(storage.set, 'token', data.payload)
    } else {
      yield put(userLoginFailed())
      yield call(toastr.error, data.payload)
    }
  } catch (e) {
    yield put(userLoginFailed())
    yield call(toastr.error, 'Unknown Error', e)
  }
}

function * userLoginSaga () {
  yield * takeLatest(USER_LOGIN, userLogin)
}

// ------------------------------------
// Root Saga (Combines all sagas together)
// ------------------------------------
export default function * rootSaga () {
  yield [
    userLoginSaga()
  ]
}
