import {
  GAMES_LOAD,
  GAMES_LOAD_SUCCEEDED,
  GAMES_LOAD_FAILED
} from 'constants/games'

export const gamesLoad = () => ({ type: GAMES_LOAD })
export const gamesLoadSucceeded = (games) => ({
  type: GAMES_LOAD_SUCCEEDED, payload: games
})
export const gamesLoadFailed = () => ({ type: GAMES_LOAD_FAILED })

export const gamesWatch = (name) => console.log('TODO: GAMES_WATCH')
