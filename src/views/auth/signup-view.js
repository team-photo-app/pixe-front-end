import React from 'react'
import { View, Text, TextInput, Button, Alert, Image } from 'react-native'
// import { StackActions, NavigationActions } from 'react-navigation'
import firebase from '../../FB/firebase'
import { Container, Content, Footer, Header } from 'native-base'
import styleTemplate from '../templates/styleTemplate'
import styles from './styles/styles'

export default class SignUpView extends React.Component {
  constructor(props) {
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
      .then(() => { Alert.alert('You signed up!') })
      .then(() => { this.props.navigation.navigate('LoginView') })
      .catch((error) => { Alert.alert(error.message) })
  }

  onBackToLoginPress = () => {
    this.props.navigation.navigate('LoginView')
  }

  render() {
    return (
      <Container
        style={styleTemplate.container}
      >
        <Header>
          <View
            style={styles.pixiLogo}
          >
            <Image
              source={require('../../../assets/pixe2.png')}
            />

          </View>

        </Header>
        <Content
          contentContainerStyle={styleTemplate.bottom}
        >


        </Content>
        <Footer
          style={styles.footer}
        >
          <Content
            contentContainerStyle={styles.authBox}
          >

            <Button
              contentContainerStyle={styles.signUpAuthButtons}
              title='Sign Up'
              onPress={this.onSignUpPress}
            />
            <TextInput
              style={{marginBottom: 12, marginTop: 30, color: '#A6A6A6'}}
              value={this.state.email}
              onChangeText={(text) => { this.setState({ email: text }) }}
              placeholder='Enter E-Mail'
              keyboardType='email-address' // recognizes if email is not properly formatted
              autoCapitalize='none' // will capitalize every first letter if not turned off
              autoCorrect={false}
            />

            <TextInput
              style={{marginBottom: 3, color: '#A6A6A6'}}
              value={this.state.password}
              onChangeText={(text) => { this.setState({ password: text }) }}
              placeholder='Enter Password'
              secureTextEntry // creates fuzz or stars to obscure pass entry
              autoCapitalize='none'
              autoCorrect={false}
            />

            <TextInput
              style={{marginBottom: 3, color: '#A6A6A6'}}
              value={this.state.passwordConfirm}
              onChangeText={(text) => { this.setState({ passwordConfirm: text }) }}
              placeholder='Confirm Password'
              secureTextEntry // creates fuzz or stars to obscure pass entry
              autoCapitalize='none'
              autoCorrect={false}
            />
<Content
  style={{bottom: 0, marginTop: 50 }}
>
            <Button
              title='Go Back to Log In'
              style={styles.forgot}
              onPress={this.onBackToLoginPress}
            />
</Content>

          </Content>

        </Footer>
      </Container>


    )
  }
}
