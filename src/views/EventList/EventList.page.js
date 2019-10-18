import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { List, Text, View, FlatList, Button, ItemComponent } from 'react-native'
import firebase from '../../FB/firebase'
// const database = firebase.database()

class EventList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      eventList: []
    }
  }

  // on create event, also upload to storage splash image
  // fetch event splash image

  componentDidMount () {
    firebase.database().ref('users/test').set({ message: 'hello', time: 'now' })
      .then(() => { console.log('yay?') })
      .catch((error) => { console.log(error) })
    // database.ref('/pictures').push()
  }

  shouldComponentUpdate (prevProps) {
    return prevProps.events !== this.props.events
  }

  render () {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
        <Text>TODO: Event List</Text>
        {/* <Button title='hitme' onPress={() => { console.log(this.state.eventList) }} /> */}
        {/* <FlatList
          data={Object.entries(this.props.events)}
          renderItem={(itemData) => {
            return (
              <View>
                <Text>ID: {itemData.item[0]}</Text>
                <Text>Event: {itemData.item[1].eventName}</Text>
                <Text>Description: {itemData.item[1].eventDescription}</Text>
              </View>
            )
          }}
          numColumns={1}
          keyExtractor={(item) => item[0]}
        /> */}
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return { events: state.userReducer.events }
}

EventList.propTypes = {
  events: PropTypes.object
}

export default connect(mapStateToProps)(EventList)
