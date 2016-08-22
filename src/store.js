import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { browserHistory } from 'react-router'

import ls from './utils/localstore'
import { loginSuccess } from './actions/auth'
import rootReducer from './reducers'

const createStoreWithThunk = applyMiddleware(thunkMiddleware)(createStore)

// TODO: figure out how to apply multiple middlewares for routingMiddleware

const preloadedState = {
  auth: {}
}

const store = createStoreWithThunk(rootReducer, preloadedState)
export const history = syncHistoryWithStore(browserHistory, store)

if (ls.get('authToken')) {
  store.dispatch(loginSuccess(ls.get('authToken')))
}

export default store
