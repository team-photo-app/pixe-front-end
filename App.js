import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store/store';

import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import AppContainer from './src/NavRouter'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    return (
      this.state.isReady
        ? <Provider store={store}>
            <AppContainer />
            {/*<Gallery />*/}
            {/*<SignUp />*/}
          </Provider>
        : <AppLoading />
    );
  }
}


export default App;
