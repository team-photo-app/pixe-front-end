import React from 'react'
import { View, Text } from 'native-base'


class MyEvents extends React.Component {
  constructor (props) {
    super(props)

    this.state = {}

  }

  render () {
    return (
      <View>
        <Text>
           My EVENTS
        </Text>
      </View>
    )
  }
}

MyEvents.propTypes = {}

export default MyEvents
