import React, { Component } from "react";
import {
  Container,
  Content,
  Footer,
  FooterTab,
  Icon
} from "native-base";
import styles from "./styles";
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import firebase from '../../FB/firebase';
import { Alert } from 'react-native';
import { withNavigation } from 'react-navigation';
const uuidv4 = require('uuid/v4');

class CameraFooter extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hasCameraPermission: null
    }
  }

  onChooseImagePress = async () => {
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3]
    })
    if (!result.cancelled) {
      this.uploadImage(result.uri).then(() => {
        Alert.alert('Success!')
      }).catch((error) => {
        console.error(error)
        Alert.alert(error)
      })
    }
  };

  uploadImage = async (uri) => {
    const response = await fetch(uri)
    const blob = await response.blob()
    let ref = firebase.storage().ref('pixe').child(uuidv4())
    return ref.put(blob)
  };

  async componentDidMount () {
    const mediaLibrary = await Permissions.askAsync(Permissions.CAMERA_ROLL)
    const camera = await Permissions.askAsync(Permissions.CAMERA)
    const audio = await Permissions.askAsync(Permissions.AUDIO_RECORDING)
    const hasCameraPermission = (camera.status === 'granted' && audio.status && mediaLibrary.status)

    this.setState({ hasCameraPermission })
  }

  render () {
    return (
      <Container>
        <Footer style={styles.footer}>
          <FooterTab style={styles.alignCenter}>
            <Icon
              style={{ fontSize: 50 }}
              name='camera'
              title='Click to Access Camera'
              onPress={this.onChooseImagePress}
              >
            </Icon>
          </FooterTab>
        </Footer>
      </Container>
    )
  }
}

export default withNavigation(CameraFooter)
