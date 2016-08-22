import React, { Component, PropTypes } from 'react'

import css from './styles.scss'

import LoginForm from '../../components/LoginForm'

export default class Login extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  componentWillMount() {
    if (this.props.auth.isAuthenticated) {
      this.context.router.push('/')
    }
  }

  render () {
    return (
      <main className='container'>
        <section className='row'>
          <div className='col-xs-12 col-md-6 col-md-offset-3'>
            <div className={css.form}>
              <h1 className='card-title'>Welcome back.</h1>
              <LoginForm {...this.props} />
            </div>
          </div>
        </section>
      </main>
    )
  }
}
