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
              YAY! YOU'VE FINISHED ANSWERING ALL THE QUESTIONS!
              </Text>
            </View>

            <View style={styles.textContainer2}>
          <Text style={styles.atext2}>
              TRY EXPLORING SOME OF THE FOLLOWING TOOLS:
              </Text>
            </View>

        <View style={styles.textContainer3}>
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Reminders')}
            >
           <View style={styles.button}>
                        <Text style={styles.buttonText}>
                            REMINDERS
                        </Text>
                    </View>
                </TouchableHighlight>
                </View>
        
        
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Tips')}
            >
           <View style={styles.button}>
                        <Text style={styles.buttonText}>
                            TIPS
                        </Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Tracker')}
            >
           <View style={styles.button}>
                        <Text style={styles.buttonText}>
                            TRACKER
                        </Text>
                    </View>
                </TouchableHighlight>

            <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Homepage')}
            >
           <View style={styles.button}>
                        <Text style={styles.buttonText}>
                            GO TO HOMEPAGE
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
    height: deviceHeight,
    width: deviceWidth,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF857B',
  },
   textContainer: {
    backgroundColor:'#FF857B',
    height: 115,
    width: 75,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  textContainer2: {
    backgroundColor:'#FF857B',
    height: 50,
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
    height: 45,
    width: 220,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
  },
  buttonText: {
    fontSize: 20,
    margin: 10,
    color: 'white',
  },

});


export default Clothes;
