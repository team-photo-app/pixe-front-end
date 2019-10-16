import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store/store';
import superhotbase from './src/FB/firebase';
import AppContainer from './src/NavRouter'

//import Gallery from './src/views/Gallery/Gallery.page';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticationReady: false,
      isAuthenticated: false,
    };
  };


  render() {
    return (
      <Provider store={store}>
        <AppContainer />

      </Provider>
    );
  }
}


export default App;

//Chance-- <Gallery /> was after app container bfore this experiment