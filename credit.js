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

class Credit extends React.Component {

  

  render() {
    return (

      <View style={styles.container}>
       
        <Text style={styles.q}>
         DO YOU HAVE A CREDIT SCORE?
         </Text>
         <View style={styles.aContainer}>

          <Image
              source={{
                uri:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Check_green_icon.svg/1200px-Check_green_icon.svg.png',
              }}
              style={{ height: 70, width: 70 }}
            />

         <TouchableHighlight style={styles.ap}
             onPress={() => this.props.navigation.navigate('Score')}
            >
             <Text style={styles.anText}>
              YES
             </Text>
           </TouchableHighlight>
           </View>
          <View style={styles.aContainer}>

           <Image
              source={{
                uri:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/White_X_in_red_background.svg/600px-White_X_in_red_background.svg.png',
              }}
              style={{ height: 70, width: 70 }}
            />

         <TouchableHighlight style={styles.ap}
             onPress={() => this.props.navigation.navigate('Score')}
            >
             <Text style={styles.anText}>
             NO
             </Text>
           </TouchableHighlight>
          </View>

           <Image
              source={{
                uri:
                'https://png.pngtree.com/element_our/md/20180320/md_5ab0afa3d705a.png',
              }}
              style={{ height: 230, width: 325 }}
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
  marginBottom: 10,
  },
  ap: {
    backgroundColor: 'white',
    height: 65,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 25,
  },
 anText: {
    fontSize: 20,
    margin: 10,
    color: '#6BC8C8',
  },

});


export default Credit;
