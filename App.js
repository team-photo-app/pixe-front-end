import React from 'react'
import { Provider } from 'react-redux'
import store from './src/store/store'
import * as firebase from 'firebase'
import superhotbase from './src/FB/firebase'

// TODO: ERIC is working on this code
// import { AppLoading } from 'expo';
// import { Container, Text } from 'native-base';
// import * as Font from 'expo-font';
// import { Ionicons } from '@expo/vector-icons';
import AppContainer from './src/NavRouter'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // isAuthenticationReady: false,
      isAuthenticated: false
    }

    if (!firebase.apps.length) { firebase.initializeApp(superhotbase) }
    firebase.auth().onAuthStateChanged(this.onAuthStateChanged)
  }

  onAuthStateChanged = (user) => {
    // this.setState({ isAuthenticationReady: true })
    this.setState({ isAuthenticated: !!user })
  }

  render() {
    return (
      <Provider store={store}>
        <AppContainer />
        {/* <Gallery /> */}
        {/* <SignUp /> */}
      </Provider>
    )
  }
}

export default App
