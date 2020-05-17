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

class Style extends React.Component {

  

  render() {
    return (

      <View style={styles.container}>
       
        <Text style={styles.q}>
         WHAT TAKES UP A MAJORITY OF YOUR EXPENSES?
         </Text>
         <TouchableHighlight style={styles.ap}
             onPress={() => this.props.navigation.navigate('Credit')}
            >
             <Text style={styles.anText}>
              RENT/MORTGAGE
             </Text>
           </TouchableHighlight>
         <TouchableHighlight style={styles.ap}
             onPress={() => this.props.navigation.navigate('Credit')}
            >
             <Text style={styles.anText}>
             FOOD/GROCERIES
             </Text>
           </TouchableHighlight>
         <TouchableHighlight style={styles.ap}
             onPress={() => this.props.navigation.navigate('Credit')}
            >
             <Text style={styles.anText}>
             CLOTHES/SHOPPING
             </Text>
           </TouchableHighlight>
         <TouchableHighlight style={styles.ap}
             onPress={() => this.props.navigation.navigate('Credit')}
            >
             <Text style={styles.anText}>
             PHONE
             </Text>
           </TouchableHighlight>

          <Image
              source={{
                uri:
                'https://png.pngtree.com/element_our/md/20180320/md_5ab0afa3d705a.png',
              }}
              style={{ height: 195, width: 325 }}
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
  q:{
  color:'#6BC8C8',
  fontSize: 25,
  height: 125,
  width: 250,
  textAlign: 'center',
  marginBottom: 10,
  },
  ap: {
    backgroundColor: 'white',
    height: 48,
    width: 250,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
 anText: {
    fontSize: 16,
    margin: 10,
    color: '#6BC8C8',
  },

});


export default Style;
