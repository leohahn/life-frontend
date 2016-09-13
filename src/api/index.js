const API_URL = 'http://localhost:4000/api'
const SOCKET_URL = 'http://localhost:4000/socket'

export function login (userData) {
  const options = {
    method: 'POST',
    body: JSON.stringify({session: userData}),
    mode: 'cors',
    headers: new Headers({
      'content-type': 'application/json'
    })
  }
  return fetch(`${API_URL}/sessions/`, options)
    .then(res => {
      if (res.ok) {
        return res.json().then(json => {
          return {status: 'ok', payload: json.data}
        })
      } else {
        return Promise.resolve({
          status: 'error',
          payload: res.statusText
        })
      }
    })
}

export function logout (jwt) {
  const options = {
    method: 'DELETE',
    headers: new Headers({ 'Authorization': `Bearer ${jwt}` }),
    mode: 'cors'
  }
  return fetch(`${API_URL}/sessions/`, options)
}

export function userCreate (userData) {
  const options = {
    method: 'POST',
    body: JSON.stringify({user: userData}),
    headers: new Headers({ 'content-type': 'application/json' }),
    mode: 'cors'
  }
  return fetch(`${API_URL}/users/`, options)
}
