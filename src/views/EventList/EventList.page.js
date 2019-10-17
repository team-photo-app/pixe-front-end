import React from 'react'
import { connect } from 'react-redux'
import { Text, View, FlatList } from 'react-native'

class EventList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      eventList: {}
    }
  }

  // on create event, also upload to storage splash image
  // fetch event splash image

  componentDidMount () {
    const eventList = this.props.events || {}
    this.setState((prevState) => {
      return { ...prevState, eventList }
    })
  }

  render () {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
        <Text>TODO: Event List</Text>
        <FlatList
          data={Object.entries(this.state.eventList)}
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
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return { events: state.userReducer.events }
}

export default connect(mapStateToProps)(EventList)
