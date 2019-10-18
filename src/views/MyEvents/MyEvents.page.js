import React from 'react'
import {
  View,
  Text,
  Header,
  Footer,
  Content,
  Container,
  Button, Icon, Left, Right
} from 'native-base'
import styleTemplate from '../templates/styleTemplate'
import styles from './styles/styles'
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
      <Container style={{ backgroundColor: '#F7F8FC' }}>
        <Header style={styleTemplate.header}>

          <Left>
            <Button transparent onPress={() => this.props.navigation.openDrawer()}>
              <Icon
                style={styleTemplate.menu}
                name='menu'
              />
            </Button>
          </Left>
          <Right>
            <Image
              style={{ marginBottom: 8 }}
              source={require('../../../assets/pixe_sm.png')}
            />
          </Right>
        </Header>
        <Content>
          <ScrollView
            contentContainerStyle={styleTemplate.container}
          >
            <View style={styles.eventPhotoWrapper}>
              <Text style={styles.text} onPress={() => { this.props.navigation.navigate('Gallery') }}>Birthday Party</Text>
              <Image
                style={styles.eventPhotos}
                source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/pixe-b18c8.appspot.com/o/pixe%2Fevents%2Fbirthday.jpg?alt=media&token=4569c3e0-55af-404e-88af-5069aadcf9f4' }}
              />
            </View>
            <View style={styles.eventPhotoWrapper}>

              <Text style={styles.text} onPress={() => { this.props.navigation.navigate('Gallery') }}>Cupcake Party</Text>
              <Image
                style={styles.eventPhotos}
                source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/pixe-b18c8.appspot.com/o/pixe%2Fevents%2Fcupcakes.jpg?alt=media&token=60d31bd4-6248-4b65-ae75-944b53815a4a' }}
              />
            </View>
            <View style={styles.eventPhotoWrapper}>
              <Text style={styles.text} onPress={() => { this.props.navigation.navigate('Gallery') }}>Funeral Party</Text>
              <Image
                style={styles.eventPhotos}
                source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/pixe-b18c8.appspot.com/o/pixe%2Fevents%2Ffuneral.jpg?alt=media&token=60a37fdb-addb-4934-b7e2-ecc7c252dc81' }}
              />
            </View>
            <View style={styles.eventPhotoWrapper}>

              <Text style={styles.text} onPress={() => { this.props.navigation.navigate('Gallery') }}>Halloween Party</Text>
              <Image
                style={styles.eventPhotos}
                source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/pixe-b18c8.appspot.com/o/pixe%2Fevents%2Fhalloween.jpg?alt=media&token=0f037ef4-c586-41a7-b957-da099176a70d' }}
              />
            </View>
            <View style={styles.eventPhotoWrapper}>

              <Text style={styles.text} onPress={() => { this.props.navigation.navigate('Gallery') }}>Therapy Session</Text>
              <Image
                style={styles.eventPhotos}
                source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/pixe-b18c8.appspot.com/o/pixe%2Fevents%2Fhappyhour.jpg?alt=media&token=4bb81ee3-ebe5-4393-b597-63258eb25870' }}
              />
            </View>
            <View style={styles.eventPhotoWrapper}>

              <Text style={styles.text} onPress={() => { this.props.navigation.navigate('Gallery') }}>Thanksgiving at Gram-Grams</Text>
              <Image
                style={styles.eventPhotos}
                source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/pixe-b18c8.appspot.com/o/pixe%2Fevents%2Fthanksgiving.jpg?alt=media&token=875480e8-bd89-4085-ab20-5dec11e1153a' }}
              />
            </View>
            <View style={styles.eventPhotoWrapper}>

              <Text style={styles.text}>Nerd Party</Text>
              <TouchableHighlight onPress={() => { this.props.navigation.navigate('Gallery') }}>
                <Image
                  style={styles.eventPhotos}
                  source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/pixe-b18c8.appspot.com/o/pixe%2Fe4274eb1-cd2a-4289-b94d-efe7265dd0c9?alt=media&token=5cc6a892-fbc6-48c0-a387-7110f7fc86dd' }}
                />
              </TouchableHighlight>
            </View>
          </ScrollView>
        </Content>
        <Footer style={styleTemplate.footer} />
      </Container>
    )
  }
}

// MyEvents.propTypes = {}

const mapStateToProps = (state) => {
  return { events: state.userReducer.events }
}

export default connect(mapStateToProps)(MyEvents)
