import React from 'react';
import { connect } from 'react-redux';
import { View, Image, Text, Button } from 'react-native';


class Gallery extends React.Component {

  handlePress(event) {
    console.log(this.props);
  }

  render () {
    return (

      <View>
        <Button title="Event State" onPress={this.handlePress} />
        <Text>Keller Wedding</Text>
      </View>

    )

  }
}

const mapStateToProps = (state) => {
  return {
    pictures: state
  }
}

export default connect(mapStateToProps)(Gallery) ;