import React from 'react'
import {
  View,
  Text,
  Header,
  Footer,
  Content,
  Container,
  Button, Icon, Left, Right,
} from 'native-base'
import styles from './styles/styles'
import styleTemplate from '../templates/styleTemplate'
import { connect } from 'react-redux'
import { Image, ScrollView } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'

class MyEvents extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      eventList: [],
      isReady: false
    }
  }

  componentDidMount () {
    const eventList = Object.entries(this.props.events)
    this.setState({ ...this.state, eventList, isReady: true })
  }

  render () {
    return (
      <Container>
        <Header style={styleTemplate.header}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.openDrawer()}>
              <Icon
                style={styleTemplate.menu}
                name="menu" />
            </Button>
          </Left>
          <Right>
            <Text>PixE</Text>
          </Right>
        </Header>
        <Content>
          <ScrollView>
            {this.state.isReady ? console.log(this.state.eventList[1][0]) : null}
            <Text>My EVENTS</Text>
            <View style={{ margin: 10 }}>
              <Text onPress={() => { this.props.navigation.navigate('Gallery') }}>Birthday Party</Text>
              <Image
                style={{ height: 300, width: 300 }}
                source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/pixe-b18c8.appspot.com/o/pixe%2Fevents%2Fbirthday.jpg?alt=media&token=4569c3e0-55af-404e-88af-5069aadcf9f4' }}
              />
            </View>
            <View style={{ margin: 10 }}>
              <Text onPress={() => { this.props.navigation.navigate('Gallery') }}>Cupcake Party</Text>
              <Image
                style={{ height: 300, width: 300 }}
                source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/pixe-b18c8.appspot.com/o/pixe%2Fevents%2Fcupcakes.jpg?alt=media&token=60d31bd4-6248-4b65-ae75-944b53815a4a' }}
              />
            </View>
            <View style={{ margin: 10 }}>
              <Text onPress={() => { this.props.navigation.navigate('Gallery') }}>Funeral Party</Text>
              <Image
                style={{ height: 300, width: 300 }}
                source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/pixe-b18c8.appspot.com/o/pixe%2Fevents%2Ffuneral.jpg?alt=media&token=60a37fdb-addb-4934-b7e2-ecc7c252dc81' }}
              />
            </View>
            <View style={{ margin: 10 }}>
              <Text onPress={() => { this.props.navigation.navigate('Gallery') }}>Halloween Party</Text>
              <Image
                style={{ height: 300, width: 300 }}
                source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/pixe-b18c8.appspot.com/o/pixe%2Fevents%2Fhalloween.jpg?alt=media&token=0f037ef4-c586-41a7-b957-da099176a70d' }}
              />
            </View>
            <View style={{ margin: 10 }}>
              <Text onPress={() => { this.props.navigation.navigate('Gallery') }}>Therapy Session</Text>
              <Image
                style={{ height: 300, width: 300 }}
                source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/pixe-b18c8.appspot.com/o/pixe%2Fevents%2Fhappyhour.jpg?alt=media&token=4bb81ee3-ebe5-4393-b597-63258eb25870' }}
              />
            </View>
            <View style={{ margin: 10 }}>
              <Text onPress={() => { this.props.navigation.navigate('Gallery') }}>Thanksgiving at Gram-Grams</Text>
              <Image
                style={{ height: 300, width: 300 }}
                source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/pixe-b18c8.appspot.com/o/pixe%2Fevents%2Fthanksgiving.jpg?alt=media&token=875480e8-bd89-4085-ab20-5dec11e1153a' }}
              />
            </View>
            <View style={{ margin: 10 }}>
              <Text>Keller Wedding</Text>
              <TouchableHighlight onPress={() => { this.props.navigation.navigate('Gallery') }}>
                <Image
                  style={{ height: 300, width: 300 }}
                  source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/pixe-b18c8.appspot.com/o/pixe%2Fevents%2Fwedding.jpg?alt=media&token=5da3e83d-0781-4e60-92e3-7f5e3c6c4e1b' }}
                />
              </TouchableHighlight>
            </View>
          </ScrollView>
        </Content>
        <Footer style={styleTemplate.footer}
        />
      </Container>
    );
  }
}

// MyEvents.propTypes = {}

const mapStateToProps = (state) => {
  return { events: state.userReducer.events }
}

export default connect(mapStateToProps)(MyEvents)
