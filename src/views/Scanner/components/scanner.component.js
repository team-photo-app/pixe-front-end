import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

import { BarCodeScanner} from 'expo-barcode-scanner';
import styles from '../styles/scanner-styles'


export default  class BarcodeScanner extends React.Component {
  state = {
    hasCameraPermission: null,
    scanned: false,
  };
  async componentDidMount() {
    this.getPermissionsAsync();
  }
  getPermissionsAsync =  async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermissions: status === 'granted' });
  };
  handleBarCodeScanned = ({ type, data }) => {
    this.setState({ scanned: true });
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  }

  render() {
    const { hasCameraPermissions, scanned } = this.state;

    if ( hasCameraPermissions === null) {
      return <Text>Requesting Camera Permission</Text>
    }
    if ( !hasCameraPermissions ) {
      return <Text>No Access to Camera</Text>
    }
    return (
        <View style={ styles.alignCenter }>
          <BarCodeScanner
            onBarCodeScanned={ scanned ? undefined : this.handleBarCodeScanned }
            style={ StyleSheet.absoluteFillObject }
            />

          {scanned && (
              <Button title={'Scan your Code'} onPress={() => this.setState({ scanned: false })} />
          )}
        </View>
    );
  }



}

