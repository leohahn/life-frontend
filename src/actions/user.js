import {
  USER_LOGIN,
  USER_LOGIN_REQUESTED,
  USER_LOGIN_SUCCEEDED,
  USER_LOGIN_FAILED
} from 'constants/user'

export const userLogin = (userData) => ({ type: USER_LOGIN, payload: userData })

export const userLoginRequested = () => ({ type: USER_LOGIN_REQUESTED })

export const userLoginFailed = () => ({ type: USER_LOGIN_FAILED })

export const userLoginSucceeded = (userData) => ({
  type: USER_LOGIN_SUCCEEDED,
  payload: userData
})

