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
              style={{ height: 125, width: 125 }}
            />
            
            </View>
            
            <Text style={styles.atext}>
              Explore MoneyBuddy's different tools!
            </Text>
                
            <View style={styles.one}>
                 <Image
              source={{
                uri:
                'https://cdn2.iconfinder.com/data/icons/social-productivity-line-art-2/128/notification-512.png',
              }}
              style={{ height: 35, width: 35 }}
            />


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
            <View style={styles.one}>
            <Image
              source={{
                uri:
                'http://cdn.onlinewebfonts.com/svg/img_298238.png',
              }}
              style={{ height: 35, width: 35 }}
            />
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Tips')}
            >
           <View style={styles.button}>
                        <Text style={styles.buttonText}>
                            TIPS
                        </Text>
                    </View>
                </TouchableHighlight>
              </View>
              <View style={styles.one}>
              <Image
              source={{
                uri:
                'http://cdn.onlinewebfonts.com/svg/img_374058.png',
              }}
              style={{ height: 35, width: 35 }}
            />
                <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Tracker')}
            >
           <View style={styles.button}>
                        <Text style={styles.buttonText}>
                            TRACKER
                        </Text>
                    </View>
                </TouchableHighlight>
              </View>
              <View style={styles.one}>
              <Image
              source={{
                uri:
                'http://pngimg.com/uploads/question_mark/question_mark_PNG65.png',
              }}
              style={{ height: 35, width: 35 }}
            />
                <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Style')}
            >
           <View style={styles.button}>
                        <Text style={styles.buttonText}>
                            QUESTION SURVEY
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>
            <Image
              source={{
                uri:
                'https://png.pngtree.com/element_our/md/20180320/md_5ab0afa3d705a.png',
              }}
              style={{ height: 150, width: 325 }}
            />

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
    alignItems: 'center'
  },

titleContainer: {
    backgroundColor: '#FF857B',
  },
button: {
    backgroundColor: '#6BC8C8',
    borderRadius: 50,
    height: 50,
    width: 220,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 9,
  },   
  buttonText: {
      fontSize: 20,
    margin: 10,
    color: 'white',
    },
  atext: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },
  one: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default Homescreen;
