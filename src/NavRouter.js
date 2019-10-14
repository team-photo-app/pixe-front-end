import React from 'react';
import { createDrawerNavigator, createStackNavigator, createAppContainer } from "react-navigation";
// import { Root } from 'native-base'
import CameraPage from './views/Camera/Camera.page';
import CameraScreen from './views/Camera/components/camera-screen.component';

const AppNavigator = createStackNavigator(
    {
      CameraPage: {screen: CameraPage},
      CameraScreen: {screen: CameraScreen}
    });

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
