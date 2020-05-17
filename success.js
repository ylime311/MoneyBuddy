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

class Clothes extends React.Component {

  

  render() {
    return (
      <View style={styles.container}>
      
          <View style={styles.textContainer}>
          <Text style={styles.atext}>
              YOU HAVE SUCCESSFULLY CREATED YOUR ACCOUNT!
              </Text>
            </View>

            <View style={styles.textContainer2}>
          <Text style={styles.atext2}>
              ANSWER SOME QUESTIONS TO HAVE A BETTER UNDERSTANDING OF YOUR MONEY HABITS. THIS WILL ALLOW US TO GIVE YOU BETTER ADVICE AND TIPS!
              </Text>
            </View>

<View style={styles.textContainer}>
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Style')}
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
  container: {
    flex:1,
    height: deviceHeight,
    width: deviceWidth,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF857B',
  },
   textContainer: {
    backgroundColor:'#FF857B',
    height: 75,
    width: 75,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  textContainer2: {
    backgroundColor:'#FF857B',
    height: 100,
    width: 200,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  atext: {
    fontSize: 30,
    color: 'white',
  },
  atext2: {
    fontSize: 15,
    marginTop: 50,
    marginBottom: 15,
    color: '#6BC8C8',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#6BC8C8',
    borderRadius: 50,
    height: 56,
    width: 250,
    margin: 6,
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


export default Clothes;
