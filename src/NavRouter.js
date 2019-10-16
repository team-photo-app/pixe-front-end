import React from 'react'
import { createDrawerNavigator, createStackNavigator, createAppContainer } from 'react-navigation'
// import { Root } from 'native-base'
import CameraPage from './views/Camera/Camera.page.js'
import BarCodeScanner from './views/Scanner/components/scanner.component'
import Gallery from './views/Gallery/Gallery.page'
import SideBar from './views/SideBar/SideBar.component'
import ScannerPage from './views/Scanner/Scanner.page'
import LoginView from './views/auth/login-view'
import SignUpView from './views/auth/signup-view.js'
// import EventCreate from './views/EventCreate/EventCreate.page';
// import EventJoin from './views/EventJoin/EventJoin.page';
// import Landing from './views/Landing/Landing.page';
// import EventList from './views/EventList/EventList.page';

const AppNavigator = createDrawerNavigator(
  {
    Login: { screen: LoginView },
    SignUp: { screen: SignUpView },
    CameraPage: { screen: CameraPage },
    ScannerPage: { screen: ScannerPage },
    BarCodeScanner: { screen: BarCodeScanner },
    Gallery: { screen: Gallery }

    // EventCreate: {screen: EventCreate},
    // EventJoin: {screen: EventJoin},
    // Landing: {screen: Landing},
    // EventList: {screen: EventList}

  }, {
    drawerWidth: 300,
    contentOptions: {
    },
    contentComponent: props => <SideBar {...props} />

  })

const AppContainer = createAppContainer(AppNavigator)

export default AppContainer
