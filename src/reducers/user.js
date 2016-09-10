import {
  USER_LOGIN_SUCCEEDED,
  USER_LOGIN_FAILED,
  USER_LOGIN_REQUESTED
} from 'constants/user'

const initialState = {
  status: 'ok',
  loggedIn: false,
  data: null
}

export default function user (state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN_REQUESTED:
      return { status: 'fetching', ...state }

    case USER_LOGIN_SUCCEEDED:
      return { status: 'ok', loggedIn: true, data: action.payload }

    case USER_LOGIN_FAILED:
      return { status: 'error', loggedIn: false, data: null }

    default:
      return state
  }
}
