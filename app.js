import React, { Component } from 'react';
import { StyleSheet, Text, Keyboard,  View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, Platform,Button, Image, TouchableHighlight,} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Homescreen from './src/login/homescreen.js';
import Fendi from './src/login/fendi.js';






const RootStack = createStackNavigator(
{
  Home: { screen: Homescreen },
  Fendi: {screen: Fendi},
  
},
{
    initialRouteName: 'Home',
}

);

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}

