// Vendor imports
import {takeLatest} from 'redux-saga'
import {put, call, apply} from 'redux-saga/effects'
import {browserHistory} from 'react-router'
import {toastr} from 'react-redux-toastr'
// App imports
import {
  userLoginSucceeded,
  userLoginRequested,
  userLoginFailed,
  userCreateRequested,
  userCreateSucceeded,
  userCreateFailed
} from 'actions/user'
import * as API from 'api'
import {storage} from 'store/utils'
import {USER_LOGIN, USER_CREATE} from 'constants/user'

// ==============
//  Login
// ==============
function * userLogin (action) {
  try {
    yield put(userLoginRequested())
    const data = yield call(API.login, action.payload)
    if (data.status === 'ok') {
      yield put(userLoginSucceeded(data.payload.user))
      yield call(toastr.success, 'Login Succeeded')
      yield call(storage.set, 'token', data.payload)
      yield call(browserHistory.push, '/')
    } else {
      yield put(userLoginFailed())
      yield call(toastr.error, data.payload)
    }
  } catch (e) {
    yield put(userLoginFailed())
    yield call(toastr.error, 'Unknown Error', e)
  }
}

export function * userLoginSaga () {
  yield * takeLatest(USER_LOGIN, userLogin)
}

// ==============
//  Create
// ==============
function * userCreate(action) {
  try {
    const response = yield call(API.userCreate, action.payload)
    if (response.ok) {
      yield call(toastr.success, 'User Created')
      yield call(browserHistory.push, '/login')
    } else {
      yield call(toastr.error, response.statusMessage)
    }
  } catch (e) {
    yield call(toastr.error, 'User Creation Error', e)
  }
}

export function * userCreateSaga () {
  yield * takeLatest(USER_CREATE, userCreate)
}
