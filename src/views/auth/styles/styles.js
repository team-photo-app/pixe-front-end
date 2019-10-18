
import { StyleSheet, Dimensions } from 'react-native';
import styled from 'styled-components'
const { width: winWidth, height: winHeight } = Dimensions.get('window');


export default {

  alignCenter: {
    flex: 3,
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#F7F8FC",
    padding: 0,
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  authButtons: {
    position: 'absolute',
    bottom: 0,
    color: '#1F92BF'
  },
  signUpAuthButtons: {
    position: 'absolute',
    bottom: 0,
    color: '#1F92BF',
    marginBottom: 60,
  },
  authForm: {
    position: 'absolute',
    bottom: 0,
    borderColor: 'black',
    backgroundColor: '#FFFEFF',
  },

  pixiLogo: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 300,

  },
  footer: {
    borderColor: 'transparent',
    backgroundColor: 'transparent',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'column',
    height: 50,
    bottom: 50,
  },
  login: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
    flexDirection: 'column',
    // marginTop: 300,
    bottom: 0,
  },
  authBox: {
    alignItems: 'center',
    marginTop: 150,
    marginBottom: 10,
  },

  forgot: {
    marginTop: 20,
    fontSize: 10,
    color: '#A6A6A6'
  },
  signUpForgot: {
    marginTop: 80,
    color: '#A6A6A6'
  },
}
