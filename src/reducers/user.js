import {
  USER_LOGIN_SUCCEEDED,
  USER_LOGIN_FAILED,
  USER_LOGIN_REQUESTED,
  USER_LOGOUT
} from 'constants/user'

const initialState = {
  status: 'ok',
  loggedIn: false,
  data: null
}

export default function user (state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN_REQUESTED:
      return Object.assign({}, state, {
        status: 'fetching'
      })
    case USER_LOGIN_SUCCEEDED:
      return Object.assign({}, state, {
        status: 'ok', loggedIn: true, data: action.payload
      })
    case USER_LOGIN_FAILED:
      return Object.assign({}, state, {
        status: 'error', loggedIn: false, data: null
      })
    case USER_LOGOUT:
      return Object.assign({}, state, {
        status: 'ok', loggedIn: false, data: null
      })
    default:
      return state
  }
}
