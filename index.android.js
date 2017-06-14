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
  View
} from 'react-native';

export default class AwesomeProject extends Component {
  constructor(props) {

    super(props)

    this.state = {text:"Sarath"};

  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Sarath
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color:"#673AB7"
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
