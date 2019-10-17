import React, { Component } from 'react'
import AuthForm from '../../api/authForm'
import { login, signUp } from '../../api/api'

class LoginScreen extends Component {
  state = {
    authMode: 'login'
  }

  componentDidMount () {

  }

  componentWillUnmount () {

  }

  switchAuthMode = () => {
    this.setState(prevState => ({
      authMode: prevState.authMode === 'login' ? 'signup' : 'login'
    }))
  }

  render () {
    return (
      <AuthForm
        login
        authMode={this.state.authMode}
        switchAuthMode={this.switchAuthMode}
      />
    )
  }
}
