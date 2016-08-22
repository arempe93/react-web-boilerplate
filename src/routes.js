import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './containers/App'
import Home from './containers/Home'
import Login from './containers/Login'

export default function (store) {
  function onEnterAuthArea(state, replace) {
    if(!store.getState().auth.isAuthenticated) {
      replace('/login')
    }
  }

  return (
    <Route location='history' path='/' component={App}>
      <Route path='login' component={Login} />
      <Route onEnter={onEnterAuthArea}>
        <IndexRoute component={Home} />
      </Route>
    </Route>
  )
}
