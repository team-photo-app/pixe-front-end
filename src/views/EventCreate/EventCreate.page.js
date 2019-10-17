import React from 'react'
import { connect } from 'react-redux'
import { View, TextInput, Button, Alert } from 'react-native'
import uuid from 'uuid/v4'
import QRCodeComp from './components/QRCodeComp.component'
import { EVENTS_LIST_ADD } from '../../store/actions/userActions'
<<<<<<< HEAD
=======
import {
  Container,
  Content,
  Icon,
  Header,
  Footer,
  Left,
  Right, Text
} from 'native-base'
import styles from './styles/styles'
import styleTemplate from '../templates/styleTemplate'
// import HiddenView from './components/hiddenView'
>>>>>>> 0bcecfc3b904675367ad684631aa56feec1b9dde

class EventCreate extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      id: '',
      eventName: '',
      eventDescription: '',
<<<<<<< HEAD
      isFormFilled: false
=======
      isFormFilled: false,
      isHidden: false
>>>>>>> 0bcecfc3b904675367ad684631aa56feec1b9dde
    }
  }

  componentDidMount () {
    this.setState({ eventName: '', eventDescription: '', isFormFilled: false })
  }

  handleChange = (inputField, text) => {
    this.setState((prevState) => {
      return { ...prevState, [inputField]: text }
    })
  }
  /**
   * This will create a new event when submit button is clicked
   * @ChecksNameLongerThan1  {} this.state.eventName.length>1
   * @IdEqualsUuid  {} {constid=uuid(
   * @SetState  {} this.setState((prevState
   * @PrevState  {} =>{return{...prevState
   * @param  {true} isFormFilled
   * @IdEqualsId  {id} id
   */

  handleSubmit = () => {
    if (this.state.eventName.length > 1) {
      const id = uuid()
      this.setState((prevState) => {
        return {
          ...prevState,
          isFormFilled: true,
          id: id
        }
      })
      this.props.joinEvent({ eventID: id, eventName: this.state.eventName, eventDescription: this.state.eventDescription })
    } else {
      Alert.alert('Hey.', 'There has to be a name for your event.')
    }
  }
  /**
   * Handles what will showup when the QR code is rendered.
   * @param  {20}}><QRCodeCompeventID={this.state.id}eventName={this.state.eventName}eventDescription={this.state.eventDescription}/><Buttontitle='OK'onPress={(} =>{return(<Viewstyle={{margin
   * @EventId {this.state.id}
   * @EventName {this.state.eventName}
   * @EventDescription {this.state.eventDescription}
   * @Button {setState}
   */

  handleQR = () => {
    return (
<<<<<<< HEAD
      <View style={{ margin: 20 }}>
        <QRCodeComp
          eventID={this.state.id}
          eventName={this.state.eventName}
          eventDescription={this.state.eventDescription}
        />
        <Button title='OK' onPress={() => this.setState({ id: '', eventName: '', eventDescription: '', isFormFilled: false })} />
      </View>
=======
      <Content>
        <View style={{ margin: 20, borderWidth: 1, borderColor: 'black' }}>
          <QRCodeComp
            eventID={this.state.id}
            eventName={this.state.eventName}
            eventDescription={this.state.eventDescription}
          />
          <Button title='OK' onPress={() => this.setState({ id: '', eventName: '', eventDescription: '', isFormFilled: false })} />
        </View>
      </Content>
>>>>>>> 0bcecfc3b904675367ad684631aa56feec1b9dde
    )
  }

  render () {
    return (
<<<<<<< HEAD
      <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
        <TextInput
          placeholder='Enter event name'
          value={this.state.eventName}
          onChangeText={(text) => this.handleChange('eventName', text)}
        />
        <TextInput
          placeholder='Enter event description'
          value={this.state.eventDescription}
          onChangeText={(text) => this.handleChange('eventDescription', text)}
        />
        <Button title='Submit' onPress={this.handleSubmit} />
        {
          this.state.isFormFilled
            ? this.handleQR()
            : null
        }
        <Button title='Event State' onPress={() => { console.log(this.props.state.events) }} />
      </View>
=======
      <Container>
        <Header style={styleTemplate.header}>
          <Left>
            <Icon
              style={{ color: '#0D0D0D' }}
              name='menu'
              onPress={() => this.props.navigation.openDrawer()}
            />
          </Left>
          <Right>
            <Text>PixE</Text>
          </Right>
        </Header>
        <Content contentContainerStyle={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
          {this.state.isFormFilled
            ? this.handleQR()
            : (
              <View>
                <TextInput
                  placeholder='Enter event name'
                  value={this.state.eventName}
                  onChangeText={(text) => this.handleChange('eventName', text)}
                />
                <TextInput
                  placeholder='Enter event description'
                  value={this.state.eventDescription}
                  onChangeText={(text) => this.handleChange('eventDescription', text)}
                />
                <Button
                  style={styles.submit}
                  title='Submit' onPress={this.handleSubmit}
                />
              </View>
            )}
          <Button title='Event State' onPress={() => { console.log(this.props.state.events) }} />
        </Content>
        <Footer style={styleTemplate.footer} />
      </Container>
>>>>>>> 0bcecfc3b904675367ad684631aa56feec1b9dde
    )
  }
}

const mapStateToProps = (state) => {
  return {
    state: state.userReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return { joinEvent: (eventData) => dispatch(EVENTS_LIST_ADD(eventData)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventCreate)
