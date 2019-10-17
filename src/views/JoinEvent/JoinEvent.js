import React from 'react'
import { Button, View, Icon } from 'native-base';
class JoinEvent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

  }

  render() {
    const { navigate } = this.props.navigation;
    return (
       <View style={{flex: 6,
         flexDirection: 'row',
         alignItems: 'center',
         justifyContent: 'center'}}>
          <Icon
         name={"camera"}
         onPress={() => navigate('BarCodeScanner', { name: 'BarCodeScanner'})}>
          </Icon>
        </View>
    );
  }
}



export default JoinEvent;
