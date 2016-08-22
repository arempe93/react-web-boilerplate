import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import actions from '../../actions'
import css from './styles'

class App extends Component {
  render () {
    return (
      <article>
        {React.cloneElement(
          this.props.children,
          this.props
        )}
      </article>
    )
  }
}

export default connect(
  state => state,
  dispatch => bindActionCreators(actions, dispatch)
)(App)
