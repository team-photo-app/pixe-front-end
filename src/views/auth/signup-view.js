import React from 'react'
import { View, Text, TextInput, Button, Alert } from 'react-native'
// import { StackActions, NavigationActions } from 'react-navigation'
import firebase from '../../FB/firebase'

export default class SignUpView extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      passwordConfirm: ''
    }
  }

  onSignUpPress = () => {
    if (this.state.password !== this.state.passwordConfirm) {
      Alert.alert('These Passwords Do Not Match')
    }

    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => { }, (error) => { Alert.alert(error.message) })
  }

  onBackToLoginPress = () => {
    this.props.navigation.navigate('LoginView')
  }

  render () {
    return (
      <View style={{ paddingTop: 50, alignItems: 'center' }}>

        <Text>
          Sign Up Here!
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

        <TextInput
          value={this.state.passwordConfirm}
          onChangeText={(text) => { this.setState({ passwordConfirm: text }) }}
          placeholder='Confirm Password'
          secureTextEntry // creates fuzz or stars to obscure pass entry
          autoCapitalize='none'
          autoCorrect={false}
        />

        <Button
          title='Sign Up'
          onPress={this.onSignUpPress}
        />

        <Button
          title='Go Back to Log In'
          onPress={this.onBackToLoginPress}
        />

      </View>
    )
  }
}
