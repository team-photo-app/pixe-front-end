import React from 'react'
import {Icon, View} from 'native-base';
import * as ImagePicker from 'expo-image-picker';
import firebase from '../../FB/firebase';
import { Button, Alert } from 'react-native';
import { withNavigation } from 'react-navigation';
const uuidv4 = require('uuid/v4');

class CameraPage extends React.Component {
  static navigationOptions = {
    title: 'Camera',
  };

  componentDidMount() {
    const { navigation } = this.props;
    this.focusListener = navigation.addListener('didFocus', () => {
     return this.onChooseImagePress
    })
  }

  onChooseImagePress = async () => {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });
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
    let ref = firebase.storage().ref('pixe').child(uuidv4());
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
          title="Scanny-Boy"
          onPress={() => navigate('BarCodeScanner', { name: 'BarCodeScanner'})}>
      </Button>

    </>
    );
  }
}

export default CameraPage;
