

import { Container } from 'native-base';
import React from 'react';
import { View, FlatList } from 'react-native';
import firebase from '../../FB/firebase';
import {Icon} from "native-base";
import Footer from '../Footer/Footer';

import Picture from './components/Picture.component';

class Gallery extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pictures: [],
      error: '',
      ready: false
    }
  }

  componentDidMount(){
    this.getList();
  }

  getImage = (imageName) => {
    return firebase.storage().ref('pixe').child(`${imageName}`).getDownloadURL();
  }

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
        this.setState({ ...this.state, pictures: objectifiedArray, ready: true });
      })
      .catch((error) => {
        console.log('ERROR:', error);
      });
  };

  render () {
    // const { navigate } = this.props.navigation;
    return (
    <Container>

      <View>
        { // if this.state.ready is true, which will only turn true when pictures are fetched, then display list
          this.state.ready
            ? <FlatList data={this.state.pictures}
                renderItem={(itemData) => {
                  return (
                    <View>
                      <Picture url={itemData.item.url} />
                    </View>
                  );
                }}
                keyExtractor={((item) => (item.key))}
              />
            : null
        }
      </View>
      <Footer />
    </Container>
    )
  }
}

export default Gallery;
