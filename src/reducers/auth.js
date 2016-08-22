import {
  LOGIN_REQUESTED, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT_REQUESTED
} from '../actions/types'

export default function auth(state = {}, action) {
  switch(action.type) {
    case LOGIN_REQUESTED:
      return {
        ...state,
        isFetching: true
      }

    case LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        token: action.token
      }

    case LOGIN_ERROR:
      return {
        ...state,
        isFetching: false,
        code: action.code
      }

    case LOGOUT_REQUESTED:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        token: null
      }
    default:
      return state
  }
}
