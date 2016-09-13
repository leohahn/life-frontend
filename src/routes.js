import React from 'react'
import {Route} from 'react-router'
import AppLayout from 'components/AppLayout'
import HomePage from 'containers/HomePage'
import NotFoundPage from 'containers/NotFoundPage'
import LoginPage from 'containers/LoginPage'
import RegisterPage from 'containers/RegisterPage'

export default function getRoutes (store) {
  const redirectIfLoggedIn = (nextState, replaceState) => {
    const state = store.getState()

    if (state.user.loggedIn) {
      replaceState('/')
    }
  }

  const checkAuth = (nextState, replaceState) => {
    const state = store.getState()

    if (!state.user.loggedIn) {
      replaceState('/login')
    }
  }

  return (
    <Route component={AppLayout}>
      <Route onEnter={checkAuth}>
        <Route path="/" component={HomePage}/>
      </Route>

      <Route onEnter={redirectIfLoggedIn}>
        <Route path="/login" component={LoginPage}/>
        <Route path="/register" component={RegisterPage}/>
      </Route>

      <Route path="*" component={NotFoundPage}/>
    </Route>
  )
}
