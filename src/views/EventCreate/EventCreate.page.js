import React from 'react';
import { connect } from 'react-redux';
import { View, TextInput, Button, Alert} from 'react-native';
import uuid from 'uuid/v4';
import QRCodeComp from './components/QRCodeComp.component';
import { EVENTS_LIST_ADD } from '../../store/actions/userActions';
import {
  Container,
  Content,
  Icon,
  Header,
  Footer,
  Left,
  Right, Text,
} from 'native-base'
import styles from './styles/styles'
import styleTemplate from '../templates/styleTemplate'
// import HiddenView from './components/hiddenView'

class EventCreate extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: '',
      eventName: '',
      eventDescription: '',
      isFormFilled: false,
      isHidden: false,
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
      <Content>
      <View style={{margin:20, borderWidth: 1, borderColor: "black"}}>
        <QRCodeComp
          eventID={this.state.id}
          eventName={this.state.eventName}
          eventDescription={this.state.eventDescription}
        />
        <Button title={'OK'} onPress={() => this.setState({ id:'', eventName:'', eventDescription:'', isFormFilled: false })}/>
      </View>
    </Content>
    )
  }

  render() {
    return (
      <Container>
        <Header
          style={styleTemplate.header}
        >
          <Left>
              <Icon
                style={{color: '#0D0D0D'}}
                name="menu"
                onPress={() => this.props.navigation.openDrawer()}
              />
          </Left>
          <Right>
            <Text>PixE</Text>
          </Right>
        </Header>
        <Content
          contentContainerStyle={styles.bottom}
        >
          {/*<HiddenView*/}
          {/*    onTextChange={text => this.setState({isHidden: text })}*/}
          {/*    value={this.state.isHidden}*/}
          {/* >*/}
          {/*    <HiddenView hide={this.state.isHidden}>*/}
        <TextInput
          placeholder='Enter event name'
          value={this.state.eventName}
          onChangeText={ (text) => this.handleChange('eventName', text) }
        />
        <TextInput
          placeholder='Enter event description'
          value={this.state.eventDescription}
          onChangeText={ (text) => this.handleChange('eventDescription', text) }
        />
        <Button
          style={styles.submit}
          title={'Submit'} onPress={this.handleSubmit} />
          {/*    </HiddenView>*/}
          {/*</HiddenView>*/}
        {
          this.state.isFormFilled
            ? this.handleQR()
            : null
        }
        <Button title={'Event State'} onPress={()=>{console.log(this.props.state.events)}}/>

      </Content>
        <Footer
          style={styleTemplate.footer}
        />
      </Container>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(EventCreate);
