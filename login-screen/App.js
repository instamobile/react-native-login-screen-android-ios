import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import LoginScreen from './src/login/login.js'

export default class App extends React.Component {
  render() {
    return (
      <LoginScreen />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
