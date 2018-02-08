import React from 'react';
import { Text, View } from 'react-native';
import styles from '../Styles/index';

const HomeHeader = () => {
  return (
    <View style={styles.navContainer}>
      <Text style={styles.navHeader}> Home </Text>
    </View>
  );
};

const SignUpHeader = () => {
  return (
    <View style={styles.navContainer}>
      <Text style={styles.navHeader}> Sign Up </Text>
    </View>
  );
};

const SignInHeader = () => {
  return (
    <View style={styles.navContainer}>
      <Text style={styles.navHeader}> Sign In </Text>
    </View>
  );
};

const ContentsHeader = () => {
  return (
    <View style={styles.navContainer}>
      <Text style={styles.navHeader}> Contents </Text>
    </View>
  );
};

const GetUserHeader = () => {
  return (
    <View style={styles.navContainer}>
      <Text style={styles.navHeader}> Get User </Text>
    </View>
  );
};

const TodosHeader = () => {
  return (
    <View style={styles.navContainer}>
      <Text style={styles.navHeader}> Todos </Text>
    </View>
  );
};

module.exports = {
  HomeHeader,
  SignUpHeader,
  SignInHeader,
  ContentsHeader,
  GetUserHeader,
  TodosHeader,
};
