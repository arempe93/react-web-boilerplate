import axios from 'axios'
import { push } from 'react-router-redux'

import ls from '../utils/localstore'
import { MAIN_API } from '../settings'
import { logout } from '../actions/auth'
import store from '../store'

let request = (method, url, opts) => {
  let config = {
    baseURL: MAIN_API,
    headers: {
      'Authorization': `Bearer ${store.getState().auth.token}`
    },
    method,
    url,
    ...opts
  }
  return axios.request(config)
    .then(resp => {
      const { config, status, data } = resp
      console.log(`[${status}] ${config.method} "${config.url}"`)
      return data
    })
    .catch(error => {
      const { config, response } = error
      if (response) {
        const { status, data } = response
        console.warn(`${config.method} call to "${config.url}" resulted in ${status} (${data.code})`)
        if (response.status == 401) {
          console.log('This is a logout')
          store.dispatch(logout())
          store.dispatch(push('/login'))
        }
        throw response
      } else {
        console.log(`Error: ${error.message}`)
        throw error
      }
    })
}

export default {
  get: function (url, data = {}) {
    return request('GET', url, {
      params: {
        ...data
      }
    })
  },
  post: function (url, data = {}) {
    return request('POST', url, {
      data: {
        ...data
      }
    })
  },
  put: function (url, data = {}) {
    return request('PUT', url, {
      data: {
        ...data
      }
    })
  }
}
