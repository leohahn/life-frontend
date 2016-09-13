import {combineReducers} from 'redux'
import {reducer as toastrReducer} from 'react-redux-toastr'
import userReducer from './user'
import gamesReducer from './games'

export default combineReducers({
  user: userReducer,
  games: gamesReducer,
  toastr: toastrReducer
})
