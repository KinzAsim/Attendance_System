import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { colors, fonts } from '../../../style';
import { createDispatchHook } from 'react-redux';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import { Divider } from 'react-native-elements';
import { Card } from 'react-native-elements';
import DropDownPicker from 'react-native-dropdown-picker';
import { ScrollView } from 'react-native-gesture-handler';

const icon = require('../../../../assets/icons/attendance-mark.png');

class Item extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            country: 'Select Employee'
        }
    }

    render() {
        const {check_in_time,check_out_time,date,employee_name,overtime,status} = this.props;       
        return( 
            // {/* <Card containerStyle={{marginTop:hp('5%')}}> */}
            // {/* <Image
            // style={{width:wp('30%'),height:hp('15%'),marginRight:wp('2%')}}
            // source={icon}
            // /> */}

            <View style={{paddingBottom:hp('1%'),marginBottom:hp('3%')}} >
              <View style={{marginLeft:wp('3%'),paddingTop:hp('2%')}}>
              <Text style={{marginLeft:wp('2%'),fontWeight:'bold'}} numberOfLines={1}> Name:  {employee_name} </Text>
              <Divider style={{backgroundColor:'#000',marginTop:hp('1%'),marginRight:wp('2%'),marginBottom:hp('1%')}}/>
                <Text style={{marginLeft:wp('2%'),fontWeight:'bold'}} numberOfLines={1}> Day:  {date} </Text>
                <Divider style={{backgroundColor:'#000',marginTop:hp('1%'),marginRight:wp('2%'),marginBottom:hp('1%')}}/>
                <Text style={{marginLeft:wp('2%')}} numberOfLines={1}>Status:  {status} </Text>
                <Divider style={{backgroundColor:'#000',marginTop:hp('1%'),marginRight:wp('2%'),marginBottom:hp('1%')}}/>
                <Text style={{marginLeft:wp('2%')}} numberOfLines={1}>Check In Time: {check_in_time}</Text>
                <Divider style={{backgroundColor:'#000',marginTop:hp('1%'),marginRight:wp('2%'),marginBottom:hp('1%')}}/>
                <Text style={{marginLeft:wp('2%')}} numberOfLines={1}>Check Out Time:  {check_out_time} </Text>
                <Divider style={{backgroundColor:'#000',marginTop:hp('1%'),marginRight:wp('2%'),marginBottom:hp('1%')}}/>
                {/* <Text style={{marginLeft:wp('2%')}} numberOfLines={1}>Total Time:  {totalTime} </Text>
                <Divider style={{backgroundColor:'#000',marginTop:hp('1%'),marginRight:wp('2%'),marginBottom:hp('1%')}}/> */}
                <Text style={{marginLeft:wp('2%')}} numberOfLines={1}>Overtime:  {overtime} </Text>
                <Divider style={{backgroundColor:'#000',marginTop:hp('1%'),marginRight:wp('2%')}}/>
              </View>            
            </View>
            
         
        //   <View
        //     //key={item.id}
        //     style={styles.itemThreeContainer}
        //     //onPress={() => this._openArticle(item)}
        //     >
        //   <View style={styles.itemThreeSubContainer}>
        //     <View style={styles.itemThreeContent}>
        //       <View style={{flexDirection: 'row'}}>
        //         {/* <Text style={styles.title}>{name}</Text> */}
        //         <Text style={{color:'#000'}}>Kinza Asim</Text>                
        //       </View>
        //       <View style={{flexDirection: 'row',marginLeft:wp('15%')}}>
        //         <Text style={styles.title} numberOfLines={1}>292 </Text>
        //       </View>
              
        //     <View>                 
        //   </View>
        // </View>
        //     </View>
        //   </View>
          
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
 
});
