import React from 'react'
<<<<<<< HEAD
import { Container, Content, Header, Footer, Icon, Button, Left, Right, Text } from 'native-base'
=======
import { Container, Header, Footer, Icon, Button, Left, Right, Text } from 'native-base'
>>>>>>> 0bcecfc3b904675367ad684631aa56feec1b9dde
import { View, FlatList } from 'react-native'
import firebase from '../../FB/firebase'
import Picture from './components/Picture.component'
import CameraFooter from '../Footer/Footer'
import styles from './styles/styles'
<<<<<<< HEAD
=======
import styleTemplate from '../templates/styleTemplate'
>>>>>>> 0bcecfc3b904675367ad684631aa56feec1b9dde

class Gallery extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      pictures: [],
      error: '',
      ready: false,
      refreshing: false
    }
  }

  componentDidMount () {
    this.getList()
  }

  handleRefresh = () => {
    this.setState({ refreshing: true }, () => { this.getList() })
  };

  getImage = (imageName) => {
    return firebase.storage().ref('pixe').child(`${imageName}`).getDownloadURL()
  };
  /**
   * Renders gallery full of photos from the event you are currently viewing
   * @FbStorageCall  {} returnfirebase.storage
   * @eventYouAreIn  {} ('pixe')
   * @ShowAll  {} listAll
   * @PullArray  {} .then(list=>{letpicName=''constdownloadURLPromiseArray=list.items.map((item
   * @Split  {} =>{picName=item.location.path_.split('/'
   * @ReturnsAnImage  {} [1]returnthis.getImage(picName
   * @param  {} returnPromise.all(downloadURLPromiseArray
   * @param  {} .then((urlArray
   * @MapOver  {} =>{constobjectifiedArray=urlArray.map((item
   * @Return  { key: item, url: item }
   */

  getList = () => {
    return firebase.storage().ref('pixe').listAll()
      .then(list => {
        let picName = ''
        const downloadURLPromiseArray = list.items.map((item) => {
          picName = item.location.path_.split('/')[1]
          return this.getImage(picName)
        })
        return Promise.all(downloadURLPromiseArray)
      })
      .then((urlArray) => {
        const objectifiedArray = urlArray.map((item) => {
          return { key: item, url: item }
        })
        console.log('From getList: Loaded Gallery')
        this.setState({ ...this.state, pictures: objectifiedArray, ready: true, refreshing: false })
      })
      .catch((error) => {
        console.log('ERROR:', error)
      })
  };

  render () {
    // const { navigate } = this.props.navigation;
    return (
<<<<<<< HEAD
      <Container>
        <Header style={styles.header}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.openDrawer()}>
              <Icon
                style={{ color: 'black' }}
                name='menu'
              />
=======
      <Container style={styleTemplate.container}>
        <Header style={styleTemplate.header}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.openDrawer()}>
              <Icon style={styleTemplate.menu} name='menu' />
>>>>>>> 0bcecfc3b904675367ad684631aa56feec1b9dde
            </Button>
          </Left>
          <Right>
            <Text>PixE</Text>
          </Right>
        </Header>
        {// if this.state.ready is true, which will only turn true when pictures are fetched, then display list
          this.state.ready
            ? <FlatList
              data={this.state.pictures}
              refreshing={this.state.refreshing}
              onRefresh={this.handleRefresh}
              renderItem={(itemData) => {
                return (
                  <View style={styles.pictureWrapper}>
<<<<<<< HEAD
                    <Picture
                      url={itemData.item.url}
                    />
=======
                    <Picture url={itemData.item.url} />
>>>>>>> 0bcecfc3b904675367ad684631aa56feec1b9dde
                  </View>
                )
              }}
              numColumns={3}
              keyExtractor={(item) => item.key}
<<<<<<< HEAD
              />
            : null
        }
        <Footer style={styles.footer}>
=======
            // eslint-disable-next-line react/jsx-closing-bracket-location
            />
            : null
        }
        <Footer style={styleTemplate.footer}>
>>>>>>> 0bcecfc3b904675367ad684631aa56feec1b9dde
          <CameraFooter />
        </Footer>
      </Container>
    )
  }
}

export default Gallery
