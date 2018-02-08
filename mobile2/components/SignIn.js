import React, { Component } from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    return (
      <View>
        <TextInput>Email:</TextInput>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default SignIn;
