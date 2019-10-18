import React from 'react'
import { View, Image } from 'react-native'
import styles from '../styles/styles'
import Lightbox from 'react-native-lightbox'
import { Dimensions } from 'react-native-web'

class Picture extends React.Component {
  render () {
    const WINDOW_WIDTH = Dimensions.get('window').width
    const renderOpen = () => (
      <View style={{ width: WINDOW_WIDTH, aspectRatio: 1 }}>
        <Image
          style={{ flex: 1 }}
          resizeMode='contain'
          source={{ uri: this.props.url }}
        />
      </View>
    )

    return (
      <View style={styles.pictureWrapper}>
        <Lightbox
          backgroundColor='black'
          renderContent={renderOpen}
        >
          <Image
            style={styles.pictureSize}
            resizeMode='cover'
            source={{ uri: this.props.url }}
          />
        </Lightbox>
      </View>
    )
  }
}

export default Picture
