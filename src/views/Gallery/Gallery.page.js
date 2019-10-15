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
          <View>
            <Picture description={itemData.item.description} url={itemData.item.url}/>
            <Text>{itemData.item.url}</Text>
          </View>
        )}
        keyExtractor={((item,idx)=>{
          return idx.toString()})}
        />
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