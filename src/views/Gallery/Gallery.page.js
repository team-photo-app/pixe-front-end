import React from 'react';
import { connect } from 'react-redux';
import { View, Image, Text, Button, FlatList } from 'react-native';
import Picture from './components/Picture.component';

// Note - Rememeber to remove Assets folder with puppies :(
class Gallery extends React.Component {

  render () {
    return (

      <View>
        <Text>Keller Wedding</Text>
        <FlatList data={this.props.pictures} renderItem={itemData => (
          <View key={itemData.item.key}>
            <Picture key={itemData.item.key} description={itemData.item.description} url={itemData.item.url}/>
          </View>
        )}/>
      </View>

    )

  }
}

const mapStateToProps = (state) => {
  return {
    pictures: state.eventReducer.eventPicturesIds,
  }
}

export default connect(mapStateToProps, null)(Gallery) ;