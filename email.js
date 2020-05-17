import React, { Component } from "react";
import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, Expo,Platform, StyleSheet, Button, Image, TouchableHighlight, Dimensions} from 'react-native';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

class Fendi extends React.Component {

state = {
    email: 'EMAIL...',
    username: 'USERNAME...',
}

  render() {
     
    return (
     
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>

          <Text style={styles.in}>
          TYPE YOUR EMAIL
          </Text>

          <TextInput style={styles.searchInput}
             onChangeText={email => this.setState({ email })}
             value={this.state.email}
           />

            <Text style={styles.in}>
          CREATE A USERNAME
          </Text>

          <TextInput style={styles.searchInput}
             onChangeText={username => this.setState({ username })}
             value={this.state.username}
           />


          <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Pass')}
            >
            <View style={styles.button}>
              <Text style={styles.buttonText}>
              Continue
              </Text>
            </View>
          </TouchableHighlight>
            
          </View>
        </View>
      
    );
  }

}





const styles = StyleSheet.create({

loginScreenContainer: {
  flex: 1,
},
in:{
    color:'#6BC8C8',
    fontSize:16,
  },
  searchInput: {
    height: 50,
    width: 260,
    backgroundColor: 'white',
    color: '#6BC8C8',
    fontSize: 13,
    marginTop: 15,
    marginBottom: 60,
  },
loginFormView: {
    flex:1,
    backgroundColor:'#FF857B',
    height: deviceHeight,
    width: deviceWidth,
    alignItems: 'center',
    justifyContent: 'center',
},
button: {
    backgroundColor: '#6BC8C8',
    borderRadius: 50,
    height: 56,
    width: 250,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
 buttonText: {
    color: 'white',
    fontSize: 25,
 }
});


export default Fendi;
