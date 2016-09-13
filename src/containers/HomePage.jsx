import React from 'react'
import {connect} from 'react-redux'
import GamesList from 'components/GamesList'
import {gamesWatch} from 'actions/games'

const mapStateToProps = ({games}) => ({
  games: games.data,
  error: games.status === 'error'
})

const mapDispatchToProps = (dispatch) => ({
  onGameClick (gameName) {
    dispatch(gamesWatch(gameName))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GamesList)
