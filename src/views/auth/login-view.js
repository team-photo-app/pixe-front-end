import React from 'react'
import { View, Text, TextInput, Button, Alert } from 'react-native'
import PropTypes from 'prop-types'
import { StackActions, NavigationActions } from 'react-navigation'
import * as firebase from 'firebase'

export default class LoginView extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  handleOnLoginPress = () => {
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {}, (err) => { Alert.alert(err.message) })
  }

  handleOnCreateAccountPress = () => {
    var navActions = StackActions.reset({
      index: 0,
      action: [NavigationActions.navigate({ routeName: 'SignUp' })]
    })

    this.props.navigation.dispatch(navActions)
  }

  handleOnForgotPasswordPress = () => {
    var navActions = StackActions.reset({
      index: 0,
      action: [NavigationActions.navigate({ routeName: 'ForgotPassword' })]
    })

    this.props.navigation.dispatch(navActions)
  }

  render () {
    // const { navigation } = this.props.navigation
    return (
      <View>

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
          // onPress = {(onLoginPress) => navigate('LoginView', {name: 'LoginView'})}
        />

      </View>
    )
  }
}

LoginView.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func
  })
}
