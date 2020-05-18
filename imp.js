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

class Imp extends React.Component {

  

  render() {
    return (

      <View style={styles.container}>
       
        <Text style={styles.q}>
         ARE YOU AN IMPULSIVE BUYER?
         </Text>
         <View style={styles.aContainer}>

         <TouchableHighlight style={styles.ap}
             onPress={() => this.props.navigation.navigate('Next')}
            >
             <Image
              source={{
                uri:
                'http://clipground.com/images/yes-clipart-11.jpg',
              }}
              style={{ height: 115, width: 115 }}
            />
           </TouchableHighlight>
           </View>

          <View style={styles.aContainer}>

         <TouchableHighlight style={styles.ap}
             onPress={() => this.props.navigation.navigate('Next')}
            >
             <Image
              source={{
                uri:
                'http://www.clker.com/cliparts/4/e/E/k/3/G/no-button-md.png',
              }}
              style={{ height: 115, width: 115 }}
            />
           </TouchableHighlight>
          </View>

           <Image
              source={{
                uri:
                'https://png.pngtree.com/element_our/md/20180320/md_5ab0afa3d705a.png',
              }}
              style={{ height: 215, width: 325 }}
            />
 

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
  aContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  q:{
  color:'#6BC8C8',
  fontSize: 30,
  height: 125,
  width: 250,
  textAlign: 'center',
  },
  ap: {
    marginTop: 15,
  }

});


export default Imp;
