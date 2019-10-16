import React from 'react';
import { View, Image } from 'react-native';

class Picture extends React.Component {
  render() {
    return (
      <View>
        <Image style={{height:50, width:50}} source={{uri:this.props.url}} />
      </View>
    );
  }
}

export default Picture;
