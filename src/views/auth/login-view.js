import React from 'react'
import { connect } from 'react-redux'
import { SIGN_IN_SUCCESS } from '../../store/actions/userActions'
import PropTypes from 'prop-types'
import { View, Text, TextInput, Button } from 'react-native'
import { StackActions, NavigationActions } from 'react-navigation'
import firebase from '../../FB/firebase'

// const database = firebase.database()

class LoginView extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  handleOnLoginPress = () => {
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        firebase.auth().onAuthStateChanged(user => {
          this.props.navigation.navigate('MyEvents')
        })
      })
      .catch(() => {
        this.props.navigation.navigate('SignUpView')
      })
  }

  handleOnCreateAccountPress = () => {
    this.props.navigation.navigate('SignUpView')
  }

  handleOnForgotPasswordPress = () => {
    var navActions = StackActions.reset({
      index: 0,
      action: [NavigationActions.navigate({ routeName: 'ForgotPasswordView' })]
    })

    this.props.navigation.navigate('ForgotPasswordView')
  }

  render () {
    return (
      <View style={{ paddingTop: 50, alignItems: 'center' }}>
        <Text>
          Log In
        </Text>
        <TextInput
          value={this.state.email}
          onChangeText={(text) => { this.setState({ email: text }) }}
          placeholder='E-Mail'
          keyboardType='email-address' // recognizes if email is not properly formatted
          autoCapitalize='none' // will capitalize every first letter if not turned off
          autoCorrect={false}
        />
        <Text>
          Password
        </Text>
        <TextInput
          value={this.state.password}
          onChangeText={(text) => { this.setState({ password: text }) }}
          placeholder='Enter Password'
          secureTextEntry // creates fuzz or stars to obscure pass entry
          autoCapitalize='none'
          autoCorrect={false}
        />
        <Button
          title='Log In'
          onPress={this.handleOnLoginPress}
        />
        <Button
          title='Create New Account'
          onPress={this.handleOnCreateAccountPress}
        />
        <Button
          title='Forgot Password?'
          onPress={this.handleOnForgotPasswordPress}
        />
        <Button
          title='Login Testuser'
          onPress={() => { this.setState({ email: 'testuser123@gmail.com', password: 'testing' }) }}
        />
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return { signIn: (email) => { dispatch(SIGN_IN_SUCCESS(email)) } }
}

LoginView.propTypes = {
  signIn: PropTypes.func,
  navigation: PropTypes.object
}

export default connect(null, mapDispatchToProps)(LoginView)
