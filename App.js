import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store/store';

import SignUp from './src/views/Landing/components/SignUp.component';

// import { AppLoading } from 'expo';
// import { Container, Text } from 'native-base';
// import * as Font from 'expo-font';
// import { Ionicons } from '@expo/vector-icons';
import AppContainer from './src/NavRouter'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
        <SignUp />
      </Provider>
    );
  }
}


export default App;
