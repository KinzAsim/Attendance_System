import React from 'react';
import {View,Text,TouchableOpacity,StyleSheet,Dimensions, StatusBar} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import WavyHeader from './header';
import Svg, { Path } from 'react-native-svg';


DetailScreen = () => {
    return(   
        <View> 
        <WavyHeader customStyles={styles.svgCurve}/>
        </View>
        );
}
export default DetailScreen;

const styles = StyleSheet.create({
    // rest of the styles
    svgCurve: {
      position: 'absolute',
      width: Dimensions.get('window').width
    },
    headerText: {
      fontSize: 30,
      fontWeight: 'bold',
      // change the color property for better output
      color: '#fff',
      textAlign: 'center',
      marginTop: 35
    }
  });