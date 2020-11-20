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

const icon = require('../../../../assets/icons/attendance-mark.png');

class Item extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            country: 'Select Employee'
        }
    }

    render() {
        const {created_at,name} = this.props;       
        return(
          <View style={{flex:1}}>
            <DropDownPicker
                items={[
                    {label: 'Kinza Asim', value: 'usa'},
                    {label: 'Select Employee', value: 'Select Employee'},
                    {label: 'Umair yaqub', value: 'france'}
                ]}
                defaultValue={this.state.country}
                containerStyle={{height: hp('4%'),marginTop:hp('3%'),marginHorizontal:wp('3%')}}
                style={{backgroundColor: '#fafafa'}}
                itemStyle={{
                    justifyContent: 'flex-start'
                }}
                dropDownStyle={{backgroundColor: '#fafafa'}}
                arrowSize={20}
                arrowStyle={{marginRight: 10,color:'#000',borderRadius:10}}
                showArrow={true}
                onChangeItem={item => this.setState({
                    country: item.value
                })}
            />
            <Card containerStyle={{marginTop:hp('15%')}}>
            {/* <Image
            style={{width:wp('30%'),height:hp('15%'),marginRight:wp('2%')}}
            source={icon}
            /> */}
            <View style={{flexDirection:'row'}}>
            <Text style={{color:'#000'}}>Name:  Kinza Asim</Text>
            <Text style={{marginLeft:wp('20%')}} numberOfLines={1}>Id: 292 </Text>
            </View>
            </Card>
            <View>
              <View style={{marginLeft:wp('3%'),marginTop:hp('3%')}}>
                <Text style={{marginLeft:wp('2%')}} numberOfLines={1}> Day:   Friday </Text>
                <Divider style={{backgroundColor:'#000',marginTop:hp('1%'),marginRight:wp('2%'),marginBottom:hp('1%')}}/>
                <Text style={{marginLeft:wp('2%')}} numberOfLines={1}>Status:  Present </Text>
                <Divider style={{backgroundColor:'#000',marginTop:hp('1%'),marginRight:wp('2%'),marginBottom:hp('1%')}}/>
                <Text style={{marginLeft:wp('2%')}} numberOfLines={1}>Check In Time:  9:00 AM </Text>
                <Divider style={{backgroundColor:'#000',marginTop:hp('1%'),marginRight:wp('2%'),marginBottom:hp('1%')}}/>
                <Text style={{marginLeft:wp('2%')}} numberOfLines={1}>Check Out Time:  6:00 PM </Text>
                <Divider style={{backgroundColor:'#000',marginTop:hp('1%'),marginRight:wp('2%'),marginBottom:hp('1%')}}/>
                <Text style={{marginLeft:wp('2%')}} numberOfLines={1}>Total Time:  9 hours </Text>
                <Divider style={{backgroundColor:'#000',marginTop:hp('1%'),marginRight:wp('2%'),marginBottom:hp('1%')}}/>
                <Text style={{marginLeft:wp('2%')}} numberOfLines={1}>Overtime:  0 mins </Text>
                <Divider style={{backgroundColor:'#000',marginTop:hp('1%'),marginRight:wp('2%')}}/>
              </View>            
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
