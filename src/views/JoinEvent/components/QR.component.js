import React from 'react'
import { connect } from 'react-redux'
import { Text, View, StyleSheet, Button, Alert } from 'react-native'
import * as Permissions from 'expo-permissions'
import { BarCodeScanner } from 'expo-barcode-scanner'
import styles from '../../Camera/styles/camera-toolbar-styles'
import { EVENTS_LIST_ADD } from '../../../store/actions/userActions'

class QR extends React.Component {
  state = {
    hasCameraPermission: null,
    scanned: false
  };

  async componentDidMount () {
    this.getPermissionsAsync()
  }

  getPermissionsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA)
    this.setState({ hasCameraPermissions: status === 'granted' })
  };
  // Trying to get a back button from the QR reader to MY EVENTS
  // handleBackActions = () => {
  //   const backAction = StackActions.pop({
  //     n: 1,
  //   });
  //   this.props.navigation.dispatch(backAction);
  // };

  handleBarCodeScanned = ({ type, data }) => {
    const { eventID, eventName, eventDescription } = JSON.parse(data)
    this.setState({ scanned: true })
    if (this.props.userEvents[eventID]) {
      this.setState({ scanned: false })
      Alert.alert('You\'ve already joined this event:', `${eventName}`)
    } else {
      this.props.joinEvent({ eventID, eventName, eventDescription })
      Alert.alert('You\'re in!', `${eventName}`)
    }
  };

  render () {
    const { hasCameraPermissions, scanned } = this.state

    if (hasCameraPermissions === null) {
      return <Text>Requesting Camera Permission</Text>
    }
    if (!hasCameraPermissions) {
      return <Text>No Access to Camera</Text>
    }

    return (
      <View style={styles.alignCenter}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
        {scanned && (
          <Button title='Scan your Code' onPress={() => this.setState({ scanned: false })} />
        )}
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return { userEvents: state.userReducer.events }
}

const mapDispatchToState = (dispatch) => {
  return { joinEvent: (eventData) => dispatch(EVENTS_LIST_ADD(eventData)) }
}

export default connect(mapStateToProps, mapDispatchToState)(QR)
