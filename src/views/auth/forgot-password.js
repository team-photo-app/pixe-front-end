import React from 'react'
import { View, Text, TextInput, Button, Alert, Image } from 'react-native'
import { StackActions, NavigationActions } from 'react-navigation'
import * as firebase from 'firebase'
import { Container, Content, Footer, Header } from 'native-base'
import styleTemplate from '../templates/styleTemplate'
import styles from './styles/styles'
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
          contentContainerStyle={styleTemplate.bottom}
        >



        </Content>
        <Footer
          style={styles.footer}
        >
          <Content
            contentContainerStyle={styles.authBox}
          >
            <Text
              style={{color: '#D9D9D9', marginBottom: 5}}
            >Where is my mind.. where is my mind...?</Text>
            <TextInput
              value={this.state.email}
              onChangeText={(text) => { this.setState({ email: text }) }}
              placeholder='Your Email address'
              autoCapitalize='none'
              autoCorrect={false}
            />


            <Content
              style={{bottom: 0, marginTop: 110 }}>
              <Button
                style={styles.authButtons}
                title='Reset Password'
                onPress={this.handleOnResetPasswordPress} />

              <Button
              style={styles.forgot}
              title='Return to Login'
              onPress={this.handleOnBackToLoginPress} />
          </Content>

        </Content>


        </Footer>
      </Container>


    )
  }
}
