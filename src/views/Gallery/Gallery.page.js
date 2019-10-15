import React from 'react';
import { connect } from 'react-redux';
import { View, Image, Text, FlatList } from 'react-native';
import firebase from '../../FB/firebase';

// Note - Rememeber to remove Assets folder with puppies :(
class Gallery extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      picture: '',
      error: ''
    }
  }

  componentDidMount(){
    this.getImage(`19e210db-98ec-4e1a-8298-316cbfe37b9d`);
  }

  getImage = (image) => {
    const ref = firebase.storage().ref('pixe').child(`${image}`);
    ref.getDownloadURL()
      .then((url) => {
        console.log('URL:', url);
        this.setState({ picture: url })
      })
      .catch((error) => {
        console.log('ERROR:', error);
      });
  }

  render () {
    return (
      <View>
        <Image style={{height:50, width:50}} source={{uri:this.state.picture}} />
      </View>
    )

  }
}

export default Gallery;

// const mapStateToProps = (state) => {
//   return {
//     pictures: state.eventReducer.eventPicturesIds,
//   }
// }

// export default connect(mapStateToProps, null)(Gallery) ;

      // <View>
      //   <Text>Keller Wedding</Text>
      //   <FlatList data={this.props.pictures} renderItem={itemData => (
      //     <View>
      //       <Picture description={itemData.item.description} url={itemData.item.url}/>
      //       <Text>{itemData.item.url}</Text>
      //     </View>
      //   )}
      //   keyExtractor={((item,idx)=>{
      //     return idx.toString()})}
      //   />
      // </View>