import React from 'react';
import { connect } from 'react-redux';
import { Text, View, FlatList, Button } from 'react-native';

class EventList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      eventList: [],
      isReady: false
    }
  }

  // on create event, also upload to storage splash image
  // fetch event splash image

  componentDidMount(){
    const eventList = Object.entries(this.props.events);
    this.setState((prevState) => {
      return { ...prevState, eventList, isReady: true }
    })
  }

  render () {
    return (
      <View style={{flex:1, justifyContent:'center', alignContent:'center'}}>
        <Text>TODO: Event List</Text>
        {
          this.state.isReady
            ? <FlatList 
                data={Object.entries(this.props.events)}
                renderItem={(event) => {
                  return (
                    <View>
                      <Text>ID: {event[0]}</Text>
                      <Text>Event: {event[1].eventName}</Text>
                      <Text>Description: {event[1].eventDescription}</Text>
                    </View>
                  )
                }}
                numColumns={1}
                keyExtractor={(item) => item[0]}
              />
            : null
        }
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return { events: state.userReducer.events }
}

export default connect(mapStateToProps)(EventList);
