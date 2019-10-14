import React from 'react'
import { Icon } from 'native-base';
import { Button } from 'react-native';
import View from 'react-native-web/dist/exports/View';

// import Gallery from './gallery.component'

class CameraPage extends React.PureComponent {
  static navigationOptions = {
    title: 'This is the Camera Page',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
    <>
        <Icon name="camera"
            title="Click to Access Camera"
            onPress={() => navigate('CameraScreen', { name: 'Camera' })}>
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
