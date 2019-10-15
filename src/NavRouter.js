import React from 'react';
import { createDrawerNavigator, createStackNavigator, createAppContainer } from "react-navigation";
// import { Root } from 'native-base'
import CameraPage from './views/Camera/camera.page.js';
import CameraScreen from './views/Camera/components/camera-screen.component';
// import BarcodeScanner from './views/Scanner/components/scanner.component';

const AppNavigator = createStackNavigator(
    {
      CameraPage: {screen: CameraPage},
      CameraScreen: {screen: CameraScreen},
      // Scanner: {screen: BarcodeScanner},
    });

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
