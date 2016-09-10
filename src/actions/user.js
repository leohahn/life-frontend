import {
  USER_LOGIN,
  USER_LOGIN_REQUESTED,
  USER_LOGIN_SUCCEEDED,
  USER_LOGIN_FAILED,
  USER_LOGOUT
} from 'constants/user'
import {logout} from 'api/index'
import {storage} from 'store/utils'
import {toastr} from 'react-redux-toastr'

export const userLogin = (userData) => ({ type: USER_LOGIN, payload: userData })
export const userLoginRequested = () => ({ type: USER_LOGIN_REQUESTED })
export const userLoginFailed = () => ({ type: USER_LOGIN_FAILED })
export const userLoginSucceeded = (userData) => ({
  type: USER_LOGIN_SUCCEEDED,
  payload: userData
})

export const userLogout = (jwt) => {
  logout(jwt).then(res => {
    if (res.ok) {
      toastr.success('Logged out successfuly')
      storage.remove('token')
    } else {
      toastr.error('Error during logout')
    }
  })
  return {
    type: USER_LOGOUT
  }
}
