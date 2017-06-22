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

import  Home  from './src/components/home';

export default class AwesomeProject extends Component {
  constructor(props) {

    super(props)

    this.state = {name:"Sarath"};

  }
  render() {

    let pic = {uri:'https://avatars1.githubusercontent.com/u/4659838?v=3&s=460'};
    return (
      <View style={styles.container}>
        <Text>Sarath's Mobile App</Text>
        <TextInput
        style={{height: 40}}
        onChangeText={(name) => this.setState({name})}
        value={this.state.name}
        placeholder="Name"
      />
        <Text style={styles.welcome}>
          {this.state.name}
        </Text>
        { /*<Image source={pic} style={{width: 200, height: 200}} /> */}

        <Button
          onPress={(e) => this.setState({name:''})}
          title="CLEAR"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
         <Button
          onPress={(e) => this.setState({name:'Sarath'})}
          title="RESET"
          color="#f56"
          accessibilityLabel="Learn more about this purple button"
        />
        <Home/>
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
