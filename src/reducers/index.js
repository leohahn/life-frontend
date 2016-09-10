import {combineReducers} from 'redux'
import {reducer as toastrReducer} from 'react-redux-toastr'
import userReducer from './user'

export default combineReducers({
  user: userReducer,
  toastr: toastrReducer
})
