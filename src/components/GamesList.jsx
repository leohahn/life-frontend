import React, {PropTypes} from 'react'
import ListGroup from 'react-bootstrap/lib/ListGroup'
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem'
import Button from 'react-bootstrap/lib/Button'
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar'
import Panel from 'react-bootstrap/lib/Panel'

class GamesList extends React.Component {
  static propTypes = {
    onGameClick: PropTypes.func.isRequired,
    error: PropTypes.bool.isRequired,
    games: PropTypes.object.isRequired
  }

  errorElem () {
    return (
      <Panel header="Error" bsStyle="danger">
        Error loading your games.
      </Panel>
    )
  }

  listElem (games, onClick) {
    return (
      <ListGroup>
        {Object.keys(games).map(name => (
           <ListGroupItem key={name} onClick={() => onClick(name)}>
             {name}
           </ListGroupItem>
        ))}
      </ListGroup>
    )
  }

  render () {
    const {error, games, onGameClick} = this.props
    return (
      <div>
        <ButtonToolbar style={{paddingBottom: '20px'}}>
          <Button bsStyle="primary">Create a Game</Button>
          <Button>Join a Game</Button>
        </ButtonToolbar>
        {error
          ? this.errorElem()
          : this.listElem(games, onGameClick)}
      </div>
    )
  }
}

export default GamesList
