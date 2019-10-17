import React, { Component } from 'react'
import {
  Container,
  Content,
  Footer,
  FooterTab,
  Icon
} from 'native-base'
import styles from './styles'
import * as Permissions from 'expo-permissions'
import * as ImagePicker from 'expo-image-picker'
import firebase from '../../FB/firebase'
import { Alert } from 'react-native'
import { withNavigation } from 'react-navigation'
const uuidv4 = require('uuid/v4')

class CameraFooter extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hasCameraPermission: null
    }
  }
  /**
   * Button on the footer of gallery. Launches the camera in App when pressed.
   * @allowEditing  {true} =>{constresult=awaitImagePicker.launchCameraAsync({allowsEditing
   * @aspect  [4,3]
   * @if  !result.cancelled
   * @param  {} this.uploadImage(result.uri
   * @param  {} .then
   * @param  {} =>{Alert.alert('Success!')
   * @param  {} .catch(error)
   * @param  {} =>{console.error(error)
   * @param  {} Alert.alert(error)
   */

  launchCamera = async () => {
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
    const ref = firebase.storage().ref('pixe').child(uuidv4())
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
              name='camera'
              title='Click to Access Camera'
              onPress={this.launchCamera}
            >
            </Icon>
          </FooterTab>
        </Footer>
      </Container>
    )
  }
}

export default withNavigation(CameraFooter)
