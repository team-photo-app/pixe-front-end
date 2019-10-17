import React from 'react'
import { createDrawerNavigator, createStackNavigator, createAppContainer, withNavigation } from 'react-navigation'
// import { Root } from 'native-base'
import LoginView from './views/auth/login-view'
import SignUpView from './views/auth/signup-view.js'
import CameraPage from './views/Camera/Camera.page.js';
import QR from './views/JoinEvent/components/QR.component';
import Gallery from './views/Gallery/Gallery.page';
import SideBar from './views/SideBar/SideBar.component';
import JoinEvent from './views/JoinEvent/JoinEvent';
import EventCreate from './views/EventCreate/EventCreate.page';
import EventList from './views/EventList/EventList.page';
// import EventJoin from './views/EventJoin/EventJoin.page';
// import Landing from './views/Landing/Landing.page';
// import MyEvents from './views/MyEvents/MyEvents.page';

const AppNavigator = createDrawerNavigator(
  {
    LoginView: { screen: LoginView },
    SignUpView: { screen: SignUpView },
    CameraPage: {screen: CameraPage},
    JoinEvent: {screen: JoinEvent},
    QR: {screen: QR},
    EventCreate: {screen: EventCreate},
    Gallery: {screen: Gallery},
    EventList: {screen: EventList},
    // Landing: {screen: Landing},
    // MyEvents: {screen: MyEvents}
  }, {
    drawerWidth: 300,
    contentOptions: {},
    contentComponent: props => <SideBar {...props} />
  }
)

const AppContainer = createAppContainer(AppNavigator)

export default AppContainer
