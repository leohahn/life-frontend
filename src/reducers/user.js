const initialState = {
  loggedIn: true,
  data: {
    username: null,
    name: null
  },
  error: false
}

export default function user(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}
