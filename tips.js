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
    tips: 'TIPS...',
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
                'http://cdn.onlinewebfonts.com/svg/img_298238.png',
              }}
              style={{ height: 35, width: 35 }}
            />
           
               <Text style={styles.text}>
                    TIPS
                  </Text>

                  </View>

          <View style={styles.text3}>
            <Text style={styles.atext2}>
                    TIPS ON HOW TO HANDLE YOUR MONEY!
                  </Text>

              <Text style={styles.atext4}>
                    - Create a savings account and add alittle bit of money each month.
                    </Text>
              <Text style={styles.atext4}>
                    - Cancel automatic subscriptions and memberships. Chances are, you don't use them regularly!
                </Text>
                    <Text style={styles.atext4}>
                    - Buy generic brands, not name brands!
                    </Text>
                    <Text style={styles.atext4}>
                    - Find discounts on items you buy.
                    </Text>
                    <Text style={styles.atext4}>
                    - Get into the habit of using coupons, they can be very helpful!
                  </Text>

                  </View>

                 <Text style={styles.atext3}>
                    Self-Tips:
                  </Text>

                 <TextInput style={styles.searchInput}
             onChangeText={tips => this.setState({ tips })}
             value={this.state.tips}
           />

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
  atext4: {
    fontSize: 15,
    color: 'white',
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
    height: 60,
    width: 270,
    backgroundColor: 'white',
    color: '#6BC8C8',
    fontSize: 15,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: '#6BC8C8', 
  },
});


export default Homescreen;
