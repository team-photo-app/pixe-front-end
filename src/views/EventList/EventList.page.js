import React from 'react';
import { connect } from 'react-redux';
import { Text, View, FlatList, Button } from 'react-native';

class EventList extends React.Component {

  // on create event, also upload to storage splash image
  // fetch event splash image

  render () {
    return (
      <View style={{flex:1, justifyContent:'center', alignContent:'center'}}>
        <Text>TODO: Event List</Text>
        <Button title={'State'} onPress={() => {console.log(Object.entries(this.props.events)[0][1])}}/>
        {/* <FlatList 
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
          keyExtractor={(item,idx)=>(idx.toString())}
        /> */}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return { events: state.userReducer.events }
}

export default connect(mapStateToProps)(EventList);