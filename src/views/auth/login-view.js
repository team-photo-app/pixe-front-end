import React from 'react'
import { connect } from 'react-redux'
import { SIGN_IN_SUCCESS } from '../../store/actions/userActions'
import PropTypes from 'prop-types'
import { View, Text, TextInput, Button } from 'react-native'
import { StackActions, NavigationActions } from 'react-navigation'
import firebase from '../../FB/firebase'
import styleTemplate from '../templates/styleTemplate'
import styles from './styles/styles';
import { Content, Container, Icon, Footer, Header} from 'native-base'

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

      <Container
        style={styleTemplate.container}
      >
        <Header>
          <View
            style={styles.pixiLogo}
          >
            <Image
              source={require('../../../assets/pixe.png')}
            />
          </View>

        </Header>
            <Content
              contentContainerStyle={styleTemplate.login}
            >
              <TextInput
                title='Enter Username'
                value={this.state.email}
                onChangeText={(text) => { this.setState({ email: text }) }}
                placeholder='E-Mail'
                keyboardType='email-address' // recognizes if email is not properly formatted
                autoCapitalize='none' // will capitalize every first letter if not turned off
                autoCorrect={false}
              />
              <TextInput
                title='Enter Password'
                value={this.state.password}
                onChangeText={(text) => { this.setState({ password: text }) }}
                placeholder='Enter Password'
                secureTextEntry // creates fuzz or stars to obscure pass entry
                autoCapitalize='none'
                autoCorrect={false}
              />

          <Button title='Login Testuser' onPress={() => { this.setState({ email: 'testuser123@gmail.com', password: 'testing' }) }} />
        </Content>
        <Footer
          style={styles.footer}
        >
          <Button
            contentContainerStyle={styles.authButtons}
            title='Log In'
            onPress={this.handleOnLoginPress}
          />
          <Button
            contentContainerStyle={styles.authButtons}
            title='Create New Account'
            onPress={this.handleOnCreateAccountPress}
          />
          <Button
            title='Forgot Password?'
            onPress={this.handleOnForgotPasswordPress}
          />
        </Footer>
      </Container>

    
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
