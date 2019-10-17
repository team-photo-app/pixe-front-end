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
// import EventCreate from './views/EventCreate/EventCreate.page';
// import EventJoin from './views/EventJoin/EventJoin.page';
// import Landing from './views/Landing/Landing.page';
import MyEvents from './views/MyEvents/MyEvents.page';

const AppNavigator = createDrawerNavigator(
  {
    LoginView: { screen: LoginView },
    SignUpView: { screen: SignUpView },
    CameraPage: {screen: CameraPage},
    JoinEvent: {screen: JoinEvent},
    QR: {screen: QR},
    Gallery: {screen: Gallery},

    // EventCreate: {screen: EventCreate},
    // EventJoin: {screen: EventJoin},
    // Landing: {screen: Landing},
    MyEvents: {screen: MyEvents}
  }, {
    initialRouteName: "LoginView",
    drawerWidth: 300,
    contentOptions: {},
    contentComponent: props => <SideBar {...props} />
  }
);

const defaultStateForAppNav = AppNavigator.router.getStateForAction;

AppNavigator.router.getStateForAction = (action, state) => {
  if ( state && action.type === 'Navigation/BACK') {
    console.log('SWIPE!')
  }
  return defaultStateForAppNav(action, state);
};
const AppContainer = createAppContainer(AppNavigator);

export default AppContainer
