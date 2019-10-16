import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store/store';

import LoginView from './src/views/auth/login-view';
import Gallery from './src/views/Gallery/Gallery.page';

// import { AppLoading } from 'expo';
// import { Container, Text } from 'native-base';
// import * as Font from 'expo-font';
// import { Ionicons } from '@expo/vector-icons';
import AppContainer from './src/NavRouter'


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <LoginView />
        <AppContainer />
        {/*<Gallery />*/}
        {/*<SignUp />*/}
      </Provider>
    );
  }
}


export default App;
