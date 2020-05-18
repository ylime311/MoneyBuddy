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
    reminder: 'REMINDER...',
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
                'https://cdn2.iconfinder.com/data/icons/social-productivity-line-art-2/128/notification-512.png',
              }}
              style={{ height: 35, width: 35 }}
            />
           
               <Text style={styles.text}>
                    REMINDERS
                  </Text>
              </View>
              
              <View style={styles.two}>

            <Text style={styles.atext2}>
                    Set some reminders for yourself for any upcoming payments and bills. MoneyBuddy will notify you of these upcoming payments!
                  </Text>

                </View>

               <View style={styles.one}>
           
               <Text style={styles.atext3}>
                    MON:
                  </Text>

                 <TextInput style={styles.searchInput}
             onChangeText={reminder => this.setState({ reminder })}
             value={this.state.reminder}
           />

              </View>

              <View style={styles.one}>
           
               <Text style={styles.atext3}>
                    TUES:
                  </Text>

                 <TextInput style={styles.searchInput}
             onChangeText={reminder => this.setState({ reminder })}
             value={this.state.reminder}
           />

              </View>

              <View style={styles.one}>
           
               <Text style={styles.atext3}>
                    WED:
                  </Text>

                 <TextInput style={styles.searchInput}
             onChangeText={reminder => this.setState({ reminder })}
             value={this.state.reminder}
           />

              </View>

              <View style={styles.one}>
           
               <Text style={styles.atext3}>
                    THU:
                  </Text>

                 <TextInput style={styles.searchInput}
             onChangeText={reminder => this.setState({ reminder })}
             value={this.state.reminder}
           />

              </View>

              <View style={styles.one}>
           
               <Text style={styles.atext3}>
                    FRID:
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
    },
    atext2: {
    fontSize: 15,
    marginTop: 10,
    marginBottom: 15,
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
    two:{
    backgroundColor:'#FF857B',
    height: 100,
    width: 250,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    },
    searchInput: {
    height: 30,
    width: 200,
    backgroundColor: 'white',
    color: '#6BC8C8',
    fontSize: 13,
    margin: 12,
    borderWidth: 2,
    borderColor: '#6BC8C8', 
  },
});


export default Homescreen;
