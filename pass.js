import React from 'react';
import {
  StyleSheet,
  Text,
  Keyboard,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Alert,
  KeyboardAvoidingView,
  Button,
  Image,
  TouchableHighlight,
  ImageBackground,Platform,Animated,Dimensions
} from 'react-native';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

class Cart extends React.Component {

  state = {
    password: 'PASSWORD...',
}

  render() {
    return (
      <View style={styles.container}>
      
         <Text style={styles.in}>
          CREATE A PASSWORD
          </Text>

          <TextInput style={styles.searchInput}
             onChangeText={password => this.setState({ password })}
             value={this.state.password}
           />

            <Text style={styles.in}>
          VERIFY YOUR PASSWORD
          </Text>

          <TextInput style={styles.searchInput}
             onChangeText={password => this.setState({ password })}
             value={this.state.password}
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
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#FF857B',
    height: deviceHeight,
    width: deviceWidth,
    alignItems: 'center',
    justifyContent: 'center',
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
    fontSize: 25,
    margin: 10,
    color: 'white',
  },
});


export default Cart;
