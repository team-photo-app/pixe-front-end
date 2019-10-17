import React from 'react';
import {Container, Content, Header, Footer, Icon, Button, Left, Right, Text} from 'native-base';
import { View, FlatList } from 'react-native';
import firebase from '../../FB/firebase';
import Picture from './components/Picture.component';
import CameraFooter from '../Footer/Footer';
import styles from './styles/styles';
import styleTemplate from '../templates/styleTemplate'

class Gallery extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pictures: [],
      error: '',
      ready: false,
      refreshing: false,
    }
  }

  componentDidMount(){
    this.getList();
  }

  handleRefresh = () => {
    this.setState( {refreshing: true, }, () => {this.getList()})
  };

  getImage = (imageName) => {
    return firebase.storage().ref('pixe').child(`${imageName}`).getDownloadURL();
  };

  getList = () => {
    return firebase.storage().ref('pixe').listAll()
    .then(list => {
      let picName = '';
      const downloadURLPromiseArray = list.items.map((item) => {
        picName = item.location.path_.split('/')[1];
        return this.getImage(picName);
      });
      return Promise.all(downloadURLPromiseArray);
    })
    .then((urlArray) => {
      const objectifiedArray = urlArray.map((item) => {
        return { key: item, url: item };
      });
      console.log('From getList: Loaded Gallery')
      this.setState({ ...this.state, pictures: objectifiedArray, ready: true, refreshing: false });
    })
    .catch((error) => {
      console.log('ERROR:', error);
    });
  };

  render () {
    // const { navigate } = this.props.navigation;
    return (
        <Container style={styleTemplate.container}>
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
          { // if this.state.ready is true, which will only turn true when pictures are fetched, then display list
            this.state.ready
                ? <FlatList
                    data={this.state.pictures}
                    refreshing={this.state.refreshing}
                    onRefresh={this.handleRefresh}
                    renderItem={(itemData) => {
                      return (
                          <View style={ styles.pictureWrapper }>
                          <Picture
                              url={itemData.item.url} />
                          </View>
                      );
                    }}
                    numColumns={3}
                    keyExtractor={(item) => item.key}
                  />
                : null
          }
          <Footer style={styleTemplate.footer}>
            <CameraFooter/>
          </Footer>
        </Container>
    )
  }
}

export default Gallery;
