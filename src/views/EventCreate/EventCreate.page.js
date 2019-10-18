import React from 'react'
import { connect } from 'react-redux'
import { View, TextInput, Button, Alert, Image } from 'react-native'
import uuid from 'uuid/v4'
import QRCodeComp from './components/QRCodeComp.component'
import { EVENTS_LIST_ADD } from '../../store/actions/userActions'
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

class EventCreate extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      id: '',
      eventName: '',
      eventDescription: '',
      isFormFilled: false,
      isHidden: false
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

  handleQR = () => {
    return (
      <Content
        style={{backgroundColor: "#F7F8FC"}}
      >

        <View style={styles.codeWrapper}>
          <View>
            <Icon name="ios-checkmark-circle-outline" title='OK' onPress={() => this.setState({ id: '', eventName: '', eventDescription: '', isFormFilled: false })} />
          </View>
          <QRCodeComp
            eventID={this.state.id}
            eventName={this.state.eventName}
            eventDescription={this.state.eventDescription}
          />
        </View>
      </Content>
    )
  }

  render () {
    return (
      <Container
        style={{backgroundColor: "#F7F8FC"}}
      >
        <Header style={styleTemplate.header}>
          <Left>
            <Icon
              style={{ color: '#0D0D0D' }}
              name='menu'
              onPress={() => this.props.navigation.openDrawer()}
            />
          </Left>
          <Right>
            <Image
              style={{marginBottom: 8}}
              source={require('../../../assets/pixe_sm.png')}
            />
          </Right>
        </Header>
        <Content
          contentContainerStyle={styles.container}
        >
        <Image
          source={require('../../../assets/werespan.jpg')}
          style={styles.eventPhotos}
          />
          <Left>
            <Icon
              name='md-add-circle-outline'
            />
          </Left>

          <TextInput
            style={styles.mockDescribe}
            placeholder='Describe your event...'
          />
        </Content>
        <Content contentContainerStyle={{ flex: 1, justifyContent: 'center' }}>
          {this.state.isFormFilled
            ? this.handleQR()
            : (
              <View
                style={styles.eventBox}
              >
                <Text
                  style={styles.createEventText}
                  >
                  Enter your event information:
                </Text>

                <TextInput
                  style={styles.spacer}
                  placeholder='Enter event name'
                  value={this.state.eventName}
                  onChangeText={(text) => this.handleChange('eventName', text)}
                />
                <TextInput
                  style={styles.spacer}
                  placeholder='Enter event description'
                  value={this.state.eventDescription}
                  onChangeText={(text) => this.handleChange('eventDescription', text)}
                />

              </View>
            )}
        </Content>
        <Footer style={styleTemplate.footer} >
          <Icon
            className="submit"
            name="ios-rocket"
            style={styles.submitButton }
            title='Submit' onPress={this.handleSubmit}
          />
        </Footer>
      </Container>
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
