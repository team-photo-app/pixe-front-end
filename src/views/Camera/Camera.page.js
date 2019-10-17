import React from 'react'
import { Icon, View, Footer, Container } from 'native-base'
import * as ImagePicker from 'expo-image-picker'
import firebase from '../../FB/firebase'
import { Alert } from 'react-native'
import styles from './styles/styles'
const uuidv4 = require('uuid/v4')

class CameraPage extends React.Component {
  static navigationOptions = {
    title: 'Camera'
  };

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
    const ref = firebase.storage().ref('pixe').child(uuidv4())

    // Create file metadata to update ref above
    const newMetadata = {
      contentType: 'image/jpeg',
      name: '',
      timeCreated: '',
      customMetaData: {
        userId: ''
      }
    }

    // ref.updateMetadata(newMetadata).then((metadata) => {
    // TODO: Updated metadata for image is returned in the Promise
    // reference: https://firebase.google.com/docs/storage/web/file-metadata

    // }).catch( error => {
    //   console.log('Error');
    // })
    return ref.put(blob)
  };

  render () {
    return (
      <Container style={styles.container}>
        <Footer>
          <Icon
            name='camera'
            title='Click to Access Camera'
            onPress={this.onChooseImagePress}
          />
        </Footer>
      </Container>

    )
  }
}

export default CameraPage
