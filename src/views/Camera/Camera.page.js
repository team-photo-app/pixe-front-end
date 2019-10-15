import React from 'react'
import { Icon } from 'native-base';
import View from 'react-native-web/dist/exports/View';
import * as ImagePicker from 'expo-image-picker';
import * as firebase from 'firebase';
import { Button, Alert } from 'react-native';
const uuidv4 = require('uuid/v4');

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDHwUHS59yYz6FQ36Aft4jRZET7J9BDi3Q",
  authDomain: "pixe-b18c8.firebaseapp.com",
  databaseURL: "pixe-b18c8.appspot.com",
  storageBucket: "gs://pixe-b18c8.appspot.com"
};

firebase.initializeApp(firebaseConfig);


class CameraPage extends React.PureComponent {
  static navigationOptions = {
    title: 'This is the Camera Page',
  };

  onChooseImagePress = async () => {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });
    // let result = await ImagePicker.launchImageLibraryAsync();
    if (!result.cancelled) {
      this.uploadImage(result.uri).then(() => {
        Alert.alert("Success!");
      }).catch((error) => {
        console.error(error);
        Alert.alert(error);
      });
    }
  };

  uploadImage = async (uri) => {

    const response = await fetch(uri);
    const blob = await response.blob();

    let ref = firebase.storage().ref('pixie' ).child(uuidv4());
    return ref.put(blob);
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
    <>
        <Icon name="camera"
            title="Click to Access Camera"
          onPress={this.onChooseImagePress}>
        </Icon>
      <Button
          title="Test the scanner here"
          onPress={() => navigate('Scanner', { name: 'Scanner'})}>
      </Button>

    </>
    );
  }
}

export default  CameraPage
