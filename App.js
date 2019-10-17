import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store/store';

import MyNavigator from './src/NavRouter';
import Gallery from './src/views/Gallery/Gallery.page';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }



  render() {
    if (!this.state.isAuthenticationReady) {
      return (
        <Provider store={store}>
          {(this.state.isAuthenticated) ? <Gallery /> : <MyNavigator />}
        </Provider>
      );
    }

  }
}

export default App
