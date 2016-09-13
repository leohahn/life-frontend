import {GAMES_LOAD_SUCCEEDED, GAMES_LOAD_FAILED} from 'actions/games'

const initialState = {
  status: 'ok',
  data: {
    MyAwesomeGame: {},
    WoW: {}
  },
  watching: null
}

export default function games (state = initialState, action) {
  switch (action.type) {
    case GAMES_LOAD_SUCCEEDED:
      return Object.assign({}, state, {
        data: action.payload
      })
    case GAMES_LOAD_FAILED:
      return Object.assign({}, state, {
        status: 'error'
      })
    default:
      return state
  }
}
