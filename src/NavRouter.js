import React from 'react';
import { createDrawerNavigator, createStackNavigator, createAppContainer } from "react-navigation";
// import { Root } from 'native-base'
import CameraPage from './views/Camera/Camera.page.js';
import BarcodeScanner from './views/Scanner/components/scanner.component';

const AppNavigator = createStackNavigator(
    {
      CameraPage: {screen: CameraPage},
      Scanner: {screen: BarcodeScanner},
    });

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
