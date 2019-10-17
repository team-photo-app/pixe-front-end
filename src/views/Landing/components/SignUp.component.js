import React from 'react';
import { connect } from 'react-redux';
import { TextInput, View, Alert, Button } from 'react-native';
import { SIGN_UP_SUCCESS } from '../../../store/actions/userActions.js';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleChange = (inputField, text) => {
    this.setState((prevState) => ({
      ...prevState,
      [inputField]: text,
    }));
  }

  handleSubmit = () => {
    if (this.state.username.length > 3 && this.state.password.length > 3){
      this.props.submit(this.state);
      this.setState({username:'', password:''});
    } else {
      Alert.alert('Error', 'Username and Password must be at least 3 characters');
    }
  }

  render() {
    return (
      <View>
        <TextInput
          placeholder='username'
          value={this.state.username}
          onChangeText={ (text) => this.handleChange('username', text) }
        />
        <TextInput
          placeholder='password'
          value={this.state.password}
          onChangeText={ (text) => this.handleChange('password', text) }
          onSubmitEditing={this.handleSubmit}
        />
        <Button title={'State'} onPress={ () => console.log(this.props.user) } />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.userReducer };
};

const mapDispatchToProps = (dispatch) => {
  return { submit: (payload) => dispatch(SIGN_UP_SUCCESS(payload)) }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);