import React from 'react'
import { Button, View, Icon } from 'native-base';
class ScannerPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

  }

  render() {
    // const { navigate } = this.props.navigation;
    return (
       <View>
         {/* <Icon*/}
         {/*name={"camera"}*/}
         {/*     onPress={() => navigate('BarCodeScanner', { name: 'BarCodeScanner'})}>*/}
         {/* </Icon>*/}
        </View>
    );
  }
}



export default ScannerPage;
