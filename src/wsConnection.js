import {Socket} from 'phoenix'

const SOCKET_PATH = 'ws://localhost:4000/socket'

class WsConnection {
  constructor () {
    this.state = 'init'
    this.socket = new Socket(SOCKET_PATH)

    this.socket.onOpen((e) => {
      console.log('WS OPEN')
      this.state = 'open'
    })
    this.socket.onClose((e) => {
      console.log('WS CLOSED')
      this.state = 'closed'
    })
    this.socket.onError((e) => {
      console.log('WS ERROR')
      this.state = 'error'
    })
    this.socket.onMessage((msg) => {
      console.log('MESSAGE')
    })
  }

  connect () {
    this.socket.connect()
  }
}

export default new WsConnection()
