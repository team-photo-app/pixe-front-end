import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';

class Picture extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <View>
        <Text>{this.props.description}</Text>
        <Image style={{height:75, width:75}} source={{uri:this.props.url}}/>
      </View>
    )
  }
}

export default Picture;
