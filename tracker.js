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

   state = {
    reminder: 'AMOUNT',
}
  

  render() {
    return (


      <View style={styles.container}>
       
      <View style={styles.titleContainer}>

            <Image
              source={{
                uri:
                'https://drive.google.com/thumbnail?id=19oIYcbXzx2gDUn4jSOtULjj0q_PELt7J&authuser=0&sz=w1440-h789',
              }}
              style={{ height: 125, width: 125 }}
            />
            
            </View>
            
            <View style={styles.one}>
                 <Image
              source={{
                uri:
                'http://cdn.onlinewebfonts.com/svg/img_374058.png',
              }}
              style={{ height: 35, width: 35 }}
            />
           
               <Text style={styles.text}>
                    TRACKER
                  </Text>

                  </View>

          <View style={styles.text3}>
            <Text style={styles.atext2}>
                    Keep track of how much money you spend each week!
                  </Text>
                  </View>

          <View style={styles.one}>
           
               <Text style={styles.atext3}>
                    WEEK #1:
                  </Text>

                 <TextInput style={styles.searchInput}
             onChangeText={reminder => this.setState({ reminder })}
             value={this.state.reminder}
           />

              </View>

              <View style={styles.one}>
           
               <Text style={styles.atext3}>
                    WEEK #2:
                  </Text>

                 <TextInput style={styles.searchInput}
             onChangeText={reminder => this.setState({ reminder })}
             value={this.state.reminder}
           />

              </View>

              <View style={styles.one}>
           
               <Text style={styles.atext3}>
                    WEEK #3:
                  </Text>

                 <TextInput style={styles.searchInput}
             onChangeText={reminder => this.setState({ reminder })}
             value={this.state.reminder}
           />

              </View>

              <View style={styles.one}>
           
               <Text style={styles.atext3}>
                    WEEK #4:
                  </Text>

                 <TextInput style={styles.searchInput}
             onChangeText={reminder => this.setState({ reminder })}
             value={this.state.reminder}
           />

              </View>

        <View style={styles.textContainer}>
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Homepage')}
            >
           <View style={styles.touchableButton1}>
                        <Text style={styles.buttonText}>
                          Return to Homepage
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
      fontSize: 20,
    margin: 10,
    color: 'white',
    },
    text: {
      fontSize: 30,
      fontWeight: 'bold',
    color: 'white',
    marginLeft: 12,
    },
    atext2: {
    fontSize: 15,
    margin: 10,
    color: '#6BC8C8',
    fontWeight: 'bold',
  },
   atext3: {
    fontSize: 18,
    marginTop: 10,
    marginBottom: 15,
    color: '#6BC8C8',
    fontWeight: 'bold',
  },
     one: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
    text3: {
    width: 280,
    textAlign: 'center',
    },
    searchInput: {
    height: 50,
    width: 110,
    backgroundColor: 'white',
    color: '#6BC8C8',
    fontSize: 15,
    marginBottom: 12,
    marginLeft: 10,
    borderWidth: 2,
    borderColor: '#6BC8C8', 
    textAlign: 'center',
  },
});


export default Homescreen;
