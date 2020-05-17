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
         ON AVERAGE, HOW MUCH MONEY DO YOU MAKE?
         </Text>
         <TouchableHighlight style={styles.ap}
             onPress={() => this.props.navigation.navigate('Shop')}
            >
             <Text style={styles.anText}>
              Less than 30,000
             </Text>
           </TouchableHighlight>
         <TouchableHighlight style={styles.ap}
             onPress={() => this.props.navigation.navigate('Shop')}
            >
             <Text style={styles.anText}>
             30,000-60,000
             </Text>
           </TouchableHighlight>
         <TouchableHighlight style={styles.ap}
             onPress={() => this.props.navigation.navigate('Shop')}
            >
             <Text style={styles.anText}>
             60,000-100,000
             </Text>
           </TouchableHighlight>
         <TouchableHighlight style={styles.ap}
             onPress={() => this.props.navigation.navigate('Shop')}
            >
             <Text style={styles.anText}>
             Greater than 100,000
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
