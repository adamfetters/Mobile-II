import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { SignUp } from './components/index';

const Home = props => {
  const { navigate } = props.navigate;
  return (
    <View style={container}>
      <Button title="Sign Up" onPress={() => navigate('SignUp')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Routes = StackNavigator({
  SignUp: { screen: SignUp },
});

const { container } = styles;
