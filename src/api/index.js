const API_URL = 'http://localhost:4000/api'

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
    .catch(e => {
      return Promise.resolve({
        status: 'error',
        payload: e
      })
    })
}
