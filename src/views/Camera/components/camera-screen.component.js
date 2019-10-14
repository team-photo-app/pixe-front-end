import React from 'react'

import { View, Text, } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import styles from '../styles/camera-view-styles';


import Toolbar from './toolbar.component';
import Gallery from './gallery.component'

export default class CameraScreen extends React.Component {
  camera = null;

  state = {
    captures: [],
    flashMode: Camera.Constants.FlashMode.off,
    capturing: null,
    cameraType: Camera.Constants.Type.back,
    hasCameraPermission: null,

  };

  setFlashMode = (flashMode) => this.setState({ flashMode });
  setCameraType = (cameraType) => this.setState({ cameraType });
  handleCaptureIn = () => this.setState({capturing: true });

  handleCaptureOut = () => {
    if (this.state.capturing)
      this.camera.stopRecording();
  };

  //This takes a picture
  handleShortCapture = async () => {
    const { uri } = await this.camera.takePictureAsync({});
    const asset = await MediaLibrary.createAssetAsync( uri );
    MediaLibrary.createAlbumAsync('PixE', asset)
    .then(() => {
      console.log('Album Created!');
    })
    .catch(error => {
      log('error', error);
    });
    this.setState({capturing: false, captures: [{ uri }, ...this.state.captures]})
  };

  //This takes a video
  handleLongCapture = async () => {
    const videoData = await this.camera.recordAsync({});
    this.setState({capturing: false, captures: [videoData, ...this.state.captures]})
  };

  async componentDidMount () {
    const mediaLibrary = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    const camera = await Permissions.askAsync(Permissions.CAMERA);
    const audio = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
    const hasCameraPermission = (camera.status === 'granted' && audio.status && mediaLibrary.status);

    this.setState( { hasCameraPermission });
  }
  render() {
    const { hasCameraPermission, flashMode, cameraType, capturing, captures } = this.state;

    if (hasCameraPermission === null) {
      return <View/>;
    } else if (hasCameraPermission === false) {
      return <Text> Sorry, access to camera has been denied.</Text>;
    }

    return (
        <>
        <View>
          <Camera
              type={cameraType}
              flashMode={flashMode}
              style={styles.preview}
              ref={camera => this.camera = camera}
          />
        </View>
          {captures.length > 0 && <Gallery captures={captures} />}
          <Toolbar
              capturing={capturing}
              flashMode={flashMode}
              cameraType={cameraType}
              setFlashMode={this.setFlashMode}
              setCameraType={this.setCameraType}
              onCaptureIn={this.handleCaptureIn}
              onCaptureOut={this.handleCaptureOut}
              onLongCapture={this.handleLongCapture}
              onShortCapture={this.handleShortCapture}
          />
        </>

    )
  }
}
