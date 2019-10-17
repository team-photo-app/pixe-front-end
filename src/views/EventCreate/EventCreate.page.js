import React from 'react';
import { connect } from 'react-redux';
import { View, TextInput, Button, Alert } from 'react-native';
import uuid from 'uuid/v4';
import QRCodeComp from './components/QRCodeComp.component';
import { EVENTS_LIST_ADD } from '../../store/actions/userActions';

class EventCreate extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: '',
      eventName: '',
      eventDescription: '',
      isFormFilled: false,
    }
  }

  componentDidMount(){
    this.setState({ eventName:'', eventDescription:'', isFormFilled: false });
  }

  handleChange = (inputField, text) => {
    this.setState((prevState) => {
      return { ...prevState, [inputField]: text };
    })
  }

  handleSubmit = () => {
    if (this.state.eventName.length > 1) {
      const id = uuid();
      this.setState((prevState) => {
              return {
                ...prevState,
                isFormFilled: true,
                id: id
              }
            })
      this.props.joinEvent({ eventID: id, eventName: this.state.eventName, eventDescription: this.state.eventDescription });
    } else {
      Alert.alert('Hey.', 'There has to be a name for your event.');
    }
  }

  handleQR = () => {
    return (
      <View style={{margin:20}}>
        <QRCodeComp
          eventID={this.state.id}
          eventName={this.state.eventName}
          eventDescription={this.state.eventDescription}
        />
        <Button title={'OK'} onPress={() => this.setState({ id:'', eventName:'', eventDescription:'', isFormFilled: false })}/>
      </View>
    )
  }

  render() {
    return (
      <View>
        <TextInput
          placeholder='Enter event name'
          value={this.state.eventName}
          onChangeText={ (text) => this.handleChange('eventName', text) }
          onSubmitEditing={this.handleSubmit}
        />
        <TextInput
          placeholder='Enter event description'
          value={this.state.eventDescription}
          onChangeText={ (text) => this.handleChange('eventDescription', text) }
          onSubmitEditing={this.handleSubmit}
        />
        {
          this.state.isFormFilled
            ? this.handleQR()
            : null
        }
        <Button title={'Event State'} onPress={()=>{console.log(this.props.state.events)}}/>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return { 
    state: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return { joinEvent: (eventData) => dispatch(EVENTS_LIST_ADD(eventData)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventCreate);
