import React from 'react'
import { Icon } from 'native-base';

// import Gallery from './gallery.component'

class CameraPage extends React.PureComponent {
  static navigationOptions = {
    title: 'This is the Camera Page',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
        <Icon name="camera"
            title="Click to Access Camera"
            onPress={() => navigate('CameraScreen', { name: 'Camera' })}>
        </Icon>

    );
  }
}

export default  CameraPage
