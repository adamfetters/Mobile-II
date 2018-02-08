import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

import { SignUp, SignIn, Contents } from './components/index';

const Home = props => {
  const { navigate } = props.navigation;
  return (
    <View style={container}>
      <View style={buttonContainer}>
        <Button style={button} title="Sign Up" onPress={() => navigate('SignUp')} />
        <Button style={button} title="Sign In" onPress={() => navigate('SignIn')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'skyblue',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-around',
  },
  button: {
    marginRight: 10,
  },
});

const Routes = StackNavigator(
  {
    Home: { screen: Home },
    SignUp: { screen: SignUp },
    SignIn: { screen: SignIn },
    Contents: { screen: Contents },
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  }
);

const { container, button, buttonContainer } = styles;

export default Routes;
