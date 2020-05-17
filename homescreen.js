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

class Homescreen extends React.Component {

  

  render() {
    return (


      <View style={styles.container}>
       
       <View style={styles.titleContainer}>

            <Image
              source={{
                uri:
                'https://drive.google.com/thumbnail?id=19oIYcbXzx2gDUn4jSOtULjj0q_PELt7J&authuser=0&sz=w1440-h789',
              }}
              style={{ height: 250, width: 250 }}
            />
            
            </View>
            

<View style={styles.textContainer}>
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Email')}
            >
           <View style={styles.touchableButton1}>
                        <Text style={styles.buttonText}>
                          START
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
    flex: 1,
    height: deviceHeight,
    width: deviceWidth,
    backgroundColor: '#FF857B',
    justifyContent: 'center',
    alignItems: 'center',
  },

titleContainer: {
    backgroundColor: '#FF857B',
  },

  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

   touchableButton1: {
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


export default Homescreen;
