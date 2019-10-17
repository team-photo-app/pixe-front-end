import React from 'react'
import { Icon, Footer, Container } from 'native-base'
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
    // blob is data object representation of a file
    const blob = await response.blob()
    const id = uuidv4()
    const ref = firebase.storage().ref('pixe').child(id)
    // currentUser sends back signedin user
    const user = firebase.auth().currentUser
    // Create file metadata to update ref above
    const newMetadata = {
      contentType: 'image/jpeg',
      name: '',
      timeCreated: '',
      customMetaData: {
        userId: `${user.uid}`
      }
    }
    const uploadTasker = ref.put(this.child, newMetadata)
    console.log(uploadTasker)
    console.log(this.child)

    return ref.put(blob, uploadTasker)
  }

  render () {
    return (
      <Container style={styles.container}>
        <Footer>
          <Icon
            name='camera'
            title='Click to Access Camera'
            handleOnPress={this.onChooseImagePress}
          />
        </Footer>
      </Container>

    )
  }
}

export default CameraPage
