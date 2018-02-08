import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Button, AsyncStorage } from 'react-native';
import axios from 'axios';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    return (
      <View style={inputContainer}>
        <TextInput style={inputText} placeholder="enter email:" onChangeText={email => this.setState({ email })} />
        <TextInput
          style={inputText}
          placeholder="enter password:"
          onChangeText={password => this.setState({ password })}
        />
        <Button
          title="Sign Up"
          onPress={() => {
            axios
              .post('https://mobile-server-ii.herokuapp.com/users', {
                email: this.state.email,
                password: this.state.password,
              })
              .then(res => {
                AsyncStorage.setItem('token', res.data.token).then(() => {
                  this.props.navigation.navigate('Contents');
                });
              })
              .catch(err => {
                console.log(err);
              });
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',
  },
  inputText: {
    fontSize: 20,
    height: 40,
    width: 300,
    borderColor: 'lightblue',
    borderWidth: 3,
    borderRadius: 10,
  },
  textLabel: {
    fontSize: 24,
  },
});

const { inputContainer, inputText, textLabel } = styles;
export default SignUp;
