import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

class SignUp extends Component {
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

export default SignUp;
