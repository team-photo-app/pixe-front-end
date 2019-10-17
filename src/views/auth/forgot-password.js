import React from 'react'
import { View, Text, TextInput, Button, Alert } from 'react-native'
import { StackActions, NavigationActions } from 'react-navigation'
import * as firebase from 'firebase'
export default class ForgotPasswordView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: ''
    }
  }

  handleOnResetPasswordPress = () => {
    firebase.auth().sendPasswordResetEmail(this.state.email)
      .then(() => {
        Alert.alert('Password reset email has been sent.')
      })
      .then(() => { this.props.navigation.navigate('LoginView') })
      .catch((error) => {
        Alert.alert(error.message)
      })
  }

  handleOnBackToLoginPress = () => {
    var navActions = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'LoginView' })]
    })
    this.props.navigation.navigate('LoginView')
  }

  render() {
    return (
      <View style={{ padding: 50, alighItems: 'center' }}>

        <Text>Forgot Password</Text>
        <TextInput
          style={{ width: 200, height: 40, borderwidth: 1 }}
          value={this.state.email}
          onChangeText={(text) => { this.setState({ email: text }) }}
          placeholder='Your Email address'
          autoCapitalize='none'
          autoCorrect={false}
        />
        <Button title='Reset Password' onPress={this.handleOnResetPasswordPress} />
        <Button title='Return to Login' onPress={this.handleOnBackToLoginPress} />

      </View>
    )
  }
}
