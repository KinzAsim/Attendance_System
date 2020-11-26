import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { colors, fonts } from '../../../style';
import { createDispatchHook } from 'react-redux';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import { Divider } from 'react-native-elements';

const icon = require('../../../../assets/icons/attendance-mark.png');

class Item extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        const {employee_id,employee_name,presents,absents,lates} = this.props; 
       

        return(
          // <LinearGradient colors={["#fff","#ffccbb"]}  style={{borderRadius:30,flex:1,marginVertical:hp('0.1%')}}>

           <View style={{flex:1}}>
            {/* <View style={{flexDirection:'row'}}>
            <Image
            style={{width:wp('7%'),height:hp('3.5%'),marginRight:wp('2%')}}
            source={icon}
            /> */}
            <View>
              <View style={{flexDirection:'row',marginTop:hp('1%')}}>
              <Text style={{color:'#000',marginLeft:wp('4%'),fontWeight:'bold',color:'#ff3d00'}}>Employee Name: </Text>
              <Text style={{marginLeft:wp('1%'),color:'#ff5722'}}>{employee_name}</Text>
              </View>
              <View style={{flexDirection:'row'}}>
              <Text style={{color:'#000',marginLeft:wp('4%'),fontWeight:'bold',color:'#ff3d00'}}>Employee Id: </Text>
              <Text style={{marginLeft:wp('1%'),color:'#ff5722'}}>{employee_id}</Text>
              </View>
              <View style={{flexDirection:'row'}}>
              <Text style={{color:'#000',marginLeft:wp('4%'),fontWeight:'bold',color:'#ff3d00'}}>Presents:</Text>
              <Text style={{marginLeft:wp('1%'),color:'#ff5722'}}> {presents}</Text>
              </View>
              <View style={{flexDirection:'row'}}>
              <Text style={{color:'#000',marginLeft:wp('4%'),fontWeight:'bold',color:'#ff3d00'}}>Absents: </Text>
              <Text style={{marginLeft:wp('1%'),color:'#ff5722'}}>{absents}</Text>
              </View>
              <View style={{flexDirection:'row',marginBottom:hp('1%')}}>
              <Text style={{color:'#000',marginLeft:wp('4%'),fontWeight:'bold',color:'#ff3d00'}}>Lates:</Text>
              <Text style={{marginLeft:wp('1%'),color:'#ff5722'}}>{lates}</Text>
              </View>
            </View>             
            <Divider style={{backgroundColor:'#000',marginTop:hp('1%'),marginRight:wp('2%')}}/>
         </View> 
          
        );
    }
}
export default Item;

const styles = StyleSheet.create({
  itemThreeContainer: {
    backgroundColor: 'transparent',
    padding: wp('3%'),
    borderRadius: wp('2.5%'),
    //width:wp('100%'),
    //shadowColor: colors.background,
    shadowOffset: {
      width: wp('0%'),
      height: hp('1%'),
    },
    //shadowOpacity: 0.25,
    //shadowRadius: wp('10%'),
    //elevation: wp('1%'),
    //marginVertical: hp('0.5%'),
    //marginHorizontal:wp('2%'),
  },
  itemThreeSubContainer: {
    flexDirection: 'row',
  },
  itemThreeContent: {
    flex: 1,
    paddingLeft: wp('2%'),
    justifyContent: 'space-between',
  },
  itemThreeBrand: {
    fontFamily: fonts.primaryRegular,
    fontSize: hp('1.8%'),
    color: '#000',
    marginLeft:wp('15%')
  },
  itemThreeSubtitle: {
    fontFamily: fonts.primaryRegular,
    fontSize: hp('1.5%'),
    color: colors.whiteOne,
    marginTop: hp(0.3)
  },
  title: {
    fontFamily: fonts.primaryRegular,
    fontSize: hp('1.8%'),
    color: '#000',
    
  }
});
