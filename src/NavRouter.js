import React from 'react';
import { createDrawerNavigator, createStackNavigator, createAppContainer } from "react-navigation";
// import { Root } from 'native-base'
//import CameraPage from './views/Camera/Camera.page.js';
//import BarcodeScanner from './views/Scanner/components/scanner.component';
import LoginView from "./views/auth/LoginView.js";
import SignupView from "./views/auth/SignupView.js";
import ForgotPasswordView from "./views/auth/ForgotPasswordView.js";
import Gallery from "./views/Gallery/Gallery.page.js";


const AppNavigator = createStackNavigator(
  {
    Login: { screen: LoginView },
    Signup: { screen: SignupView },
    ForgotPassword: { screen: ForgotPasswordView },

    Gallery: { screen: Gallery },

    //CameraPage: { screen: CameraPage },
    //Scanner: { screen: BarcodeScanner },
  });

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
