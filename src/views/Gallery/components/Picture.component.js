import React from 'react';
import { View, Image, Text } from 'react-native';

class Picture extends React.Component {
  render() {
    return (
      <View>
        <Text>{this.props.description}</Text>
        <Image source={this.props.url}/>
      </View>
    )
  }
}

export default Picture;
