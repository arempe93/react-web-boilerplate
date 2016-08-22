import * as axios from 'axios'

import { AUTH_API } from '../settings'
import ls from '../utils/localstore'

import {
  LOGIN_REQUESTED, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT_SUCCESS
} from './types'

function loginRequested() {
  return {
    type: LOGIN_REQUESTED
  }
}

export function loginSuccess(token) {
  return {
    type: LOGIN_SUCCESS,
    token
  }
}

function loginError(code) {
  return {
    type: LOGIN_ERROR,
    code
  }
}

export function login(email, password, rememberMe) {
  return dispatch => {
    dispatch(loginRequested())

    return axios.post(`${AUTH_API}/authenticate`, {
      email: email,
      password: password
    }).then(resp => {
      const token = resp.data.token
      ls.set('authToken', token, rememberMe)
      dispatch(loginSuccess(token))
      return resp.data
    }).catch(error => {
      if (error.response) {
        dispatch(loginError(error.response.data.code))
      } else {
        dispatch(loginError('X'))
      }
      throw error
    })
  }
}

function logoutSuccess() {
  return {
    type: LOGOUT_SUCCESS
  }
}

export function logout() {
  return dispatch => {
    ls.remove('authToken')
    dispatch(logoutSuccess())
  }
}
