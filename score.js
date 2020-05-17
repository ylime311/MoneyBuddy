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

class Score extends React.Component {

  

  render() {
    return (

      <View style={styles.container}>
       
        <Text style={styles.q}>
         WHAT IS YOUR CREDIT SCORE?
         </Text>
         <View style={styles.aContainer}>

          <Image
              source={{
                uri:
                'https://image.flaticon.com/icons/png/512/25/25423.png',
              }}
              style={{ height: 80, width: 80 }}
            />

         <TouchableHighlight style={styles.ap}
             onPress={() => this.props.navigation.navigate('Money')}
            >
             <Text style={styles.anText}>
              GREATER THAN 600
             </Text>
           </TouchableHighlight>
           </View>
          <View style={styles.aContainer}>

           <Image
              source={{
                uri:
                'https://image.flaticon.com/icons/png/512/25/25395.png',
              }}
              style={{ height: 80, width: 80 }}
            />

         <TouchableHighlight style={styles.ap}
             onPress={() => this.props.navigation.navigate('Money')}
            >
             <Text style={styles.anText}>
             LOWER THAN 600
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
    fontSize: 16,
    margin: 10,
    color: '#6BC8C8',
  },

});


export default Score;
