import React, { Component, PropTypes } from 'react'
import { browserHistory } from 'react-router'

import css from './styles'

export default class LoginForm extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      error: false
    }
  }

  submit = (ev) => {
    ev.preventDefault()

    this.props.login(
      this.state.email,
      this.state.pw
    ).then(resp => {
      browserHistory.push('/')
    }).catch(resp => {
      this.setState({ error: true })
    })
  }

  render() {
    return (
      <div className='card'>
        <section>
          {this.state.error &&
            <div className='input error'>
              Email or password is incorrect
            </div>
          }
          <form onSubmit={this.submit}>
            <div className='input'>
              <input type='email' placeholder='Email' onChange={ev => this.setState({ email: ev.target.value })} required />
            </div>
            <div className='input'>
              <input type='password' placeholder='Password' onChange={ev => this.setState({ pw: ev.target.value })} required />
            </div>
            <input type='submit' value='Login' className='small' />
          </form>
        </section>
        <footer>
          <a href='#'>Forgot Password?</a>
        </footer>
      </div>
    )
  }
}
