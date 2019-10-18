import React from 'react'
import { View, Text, TextInput, Alert, Button, Image } from 'react-native'
import { StackActions, NavigationActions } from 'react-navigation'
import firebase from '../../FB/firebase'
import styleTemplate from '../templates/styleTemplate'
import styles from './styles/styles';
import { Content, Container, Icon, Footer, Header} from 'native-base'

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
      .then(() => { }, (err) => { Alert.alert(err.message) })
    this.props.navigation.navigate('MyEvents')
  }

  handleOnCreateAccountPress = () => {
    this.props.navigation.navigate('SignUpView')
  }

  handleOnForgotPasswordPress = () => {
    var navActions = StackActions.reset({
      index: 0,
      action: [NavigationActions.navigate({ routeName: 'ForgotPassword' })]
    })

    this.props.navigation.dispatch(navActions)
  }

  render () {
    return (
      <Container
        style={styleTemplate.container}
      >
        <View>
          <Image
            style={{width: 50, height: 50}}
            require={require('../../../assets/pixe.png')}
          />
        </View>
        <Content>
          {/*  <Content*/}
          {/*    contentContainerStyle={styleTemplate.alignCenter}*/}
          {/*  >*/}
          {/*    <TextInput*/}
          {/*      title='Enter Username'*/}
          {/*      value={this.state.email}*/}
          {/*      onChangeText={(text) => { this.setState({ email: text }) }}*/}
          {/*      placeholder='E-Mail'*/}
          {/*      keyboardType='email-address' // recognizes if email is not properly formatted*/}
          {/*      autoCapitalize='none' // will capitalize every first letter if not turned off*/}
          {/*      autoCorrect={false}*/}
          {/*    />*/}
          {/*    <TextInput*/}
          {/*      title='Enter Password'*/}
          {/*      value={this.state.password}*/}
          {/*      onChangeText={(text) => { this.setState({ password: text }) }}*/}
          {/*      placeholder='Enter Password'*/}
          {/*      secureTextEntry // creates fuzz or stars to obscure pass entry*/}
          {/*      autoCapitalize='none'*/}
          {/*      autoCorrect={false}*/}
          {/*    />*/}
        </Content>
        <Content
          contentContainerStyle={styles.bottom}
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


          {/*<Button*/}
          {/*  title='Forgot Password?'*/}
          {/*  onPress={this.handleOnForgotPasswordPress}*/}
          {/*/>*/}

          {/*<Button title='Login Testuser' onPress={() => { this.setState({ email: 'testuser123@gmail.com', password: 'testing' }) }} />*/}
        </Content>
      </Container>
    )
  }
}
