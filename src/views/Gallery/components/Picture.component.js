import React from 'react'
import { View, Image } from 'react-native'
import styles from '../styles/styles'


class Picture extends React.Component {
  render () {
    return (
      <View style={styles.pictureWrapper}>
        <Image style={styles.pictureSize} source={{ uri: this.props.url }} />
      </View>
    )
  }
}

export default Picture
