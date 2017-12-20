/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  TextInput,
  Button,
  View
} from 'react-native';


export default class AwesomeProject extends Component {
  constructor(props) {

    super(props)

    this.state = {name:"Sarath"};

  }
  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Hello World</Text>
        <Text style={styles.description}>Awesome react native app</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f56',
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
    color:"#fff"
  },
  description: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
