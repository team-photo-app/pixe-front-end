import React, { Component } from "react";
import {
  Container,
  Content,
  Footer,
  FooterTab,
  Icon
} from "native-base";
import styles from "./styles";
import * as ImagePicker from 'expo-image-picker';
import firebase from '../../FB/firebase';
import { Alert } from 'react-native';
const uuidv4 = require('uuid/v4');
import { withNavigation } from 'react-navigation';

class CameraFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
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
    return (
        <Container >
          <Footer style={styles.footer} >
            <FooterTab style={styles.alignCenter}>
              <Icon
                    name="camera"
                    title="Click to Access Camera"
                    onPress={this.onChooseImagePress}>
              </Icon>
            </FooterTab>
          </Footer>
        </Container>
    );
  }
}

export default withNavigation(CameraFooter);