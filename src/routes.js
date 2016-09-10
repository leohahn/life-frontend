import React from 'react'
import {Route} from 'react-router'
import AppLayout from 'components/AppLayout'
import HomePage from 'containers/HomePage'
import NotFoundPage from 'containers/NotFoundPage'
import LoginPage from 'containers/LoginPage'

export default function getRoutes (store) {
  const redirectIfLogged = (nextState, replaceState) => {
    const state = store.getState()

    if (state.user.loggedIn) {
      replaceState('/')
    }
  }

  const checkAuth = (nextState, replaceState) => {
    const state = store.getState()

    const goingToHome =
      nextState.location.pathname === '/'

    const goingToLogin = nextState.location.pathname === '/login'

    if (state.user.loggedIn) {
      replaceState(nextState.location.pathname)
    } else {
      replaceState('/login')
    }
  }

  return (
    <Route path="/" component={AppLayout}>
      <Route onEnter={checkAuth}>
        <Route path="/" component={HomePage}/>
      </Route>

      <Route onEnter={redirectIfLogged}>
        <Route path="/login" component={LoginPage}/>
      </Route>

      <Route path="*" component={NotFoundPage}/>
    </Route>
  )
}
