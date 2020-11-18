import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { colors, fonts } from '../../../style';
import { createDispatchHook } from 'react-redux';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import { Divider } from 'react-native-elements';

const icon = require('../../../../assets/icons/attendance-mark.png');

class Item extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        const {created_at,name} = this.props;       
        return(
          <View style={{flex:1,padding:15,marginLeft:wp('2%')}}>
            <View style={{flexDirection:'row'}}>
            <Image
            style={{width:wp('7%'),height:hp('3.5%'),marginRight:wp('2%')}}
            source={icon}
            />
              <View style={{marginLeft:wp('3%')}}>
                <Text style={{color:'#000'}}>Kinza Asim</Text>
                <Text style={styles.title} numberOfLines={1}>292 </Text>
              </View>            
            </View>
            <Divider style={{backgroundColor:'#000',marginTop:hp('1%'),marginRight:wp('2%')}}/>
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
    fontWeight: 'bold'
  }
});
