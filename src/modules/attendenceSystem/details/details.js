import React from 'react';
import {View,Text,TouchableOpacity,StyleSheet,Dimensions, StatusBar,SafeAreaView,FlatList,ScrollView,LogBox} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ButtonGroup, Card } from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Item from './detaiIstem'
import DatePicker from 'react-native-datepicker';
import { Divider } from 'react-native-elements';
import DropDownPicker from 'react-native-dropdown-picker';

const buttons = ['PAST WEEK', 'PAST MONTH']
LogBox.ignoreLogs(['VirtualizedLists should never be']);

class DetailScreen extends React.Component{
  constructor(props){
    super(props);
    this.state={
      DATA:[{
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            name: 'First Item',
            
          },
          {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            name: 'First Item',
            
          },
          {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            name: 'First Item',
            
          },
          {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            name: 'First Item',
            
          },
        ]
    }
    
  }
  render(){
    const {DATA} = this.state;
    return(
      <LinearGradient colors={['#fff', '#ffccbb', '#ff3d00']} style={{flex:1}}>
      <View style={{backgroundColor:'#fff',flex:0.99,marginHorizontal:hp('2%'),marginTop:hp('2%'),marginBottom:hp('2%'),
      borderRadius:30,paddingBottom:hp('5%'),paddingTop:hp('5%'),elevation:20}}>
         <DropDownPicker
                items={[
                    {label: 'Kinza Asim', value: 'usa'},
                    {label: 'Select Employee', value: 'Select Employee'},
                    {label: 'Umair yaqub', value: 'france'}
                ]}
                placeholder='Select Employee'
                defaultValue={this.state.country}
                containerStyle={{height: hp('6%'),marginHorizontal:wp('3%')}}
                style={{backgroundColor: '#fafafa',zIndex:40}}
                itemStyle={{
                    justifyContent: 'flex-start'
                }}
                dropDownStyle={{backgroundColor: '#fafafa'}}
                arrowSize={20}
                arrowStyle={{color:'#000',borderRadius:10}}
                showArrow={true}
                onChangeItem={item => this.setState({
                    country: item.value
                })}
            />
          <View style={{flexDirection:'row',marginHorizontal:hp('4%'),borderWidth:1,borderRadius:5,borderColor:'#fff',padding:wp('5%')}}>  
            <Text style={{color:'#000'}}>Name:  Kinza Asim</Text>
            <Text style={{marginLeft:wp('20%')}} numberOfLines={1}>Id: 292 </Text>
          </View>
          <ScrollView>
          <FlatList                             
          data={ DATA }                               
          renderItem={({item}) => <Item/>}
          keyExtractor={(item, index) => index.toString()}
          />
          </ScrollView>
       
       <ButtonGroup
       buttons={buttons}
       innerBorderStyle={{color:'#ffccbb'}}
       textStyle={{color:'#fff'}}
       containerStyle={{height:hp('5%'),marginTop:hp('5%'),backgroundColor:'#ffccbb',borderColor:'#ffccbb'}}/>

      <Text style={{fontWeight:'bold',alignSelf:'center',marginTop:hp('1%')}}>Custom:</Text>
      <Divider style={{backgroundColor:'#000',marginTop:hp('1%'),marginRight:wp('30%'),marginLeft:wp('30%')}}/>

       <View style={{flexDirection:'row',marginLeft:wp('10%'),marginRight:wp('15%')}}>
       <View style={{ flexDirection: 'row', marginTop: hp('1%'), justifyContent: 'center' }}>
            <Text style={[styles.DatePickerText, { marginTop: hp('1.5%')}]}>Start: </Text>
            <DatePicker
              style={styles.DatePicker}
              // date={StartDate}
              mode="date"
              display="default"
              placeholder="select date"
              format="YYYY-MM-DD"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateInput: styles.DatePickerInput,
                dateIcon: styles.DatePickerIcon,
                dateText: styles.DateText

                // ... You can check the source to find the other keys.
              }}
              onDateChange={(date) => { startDateChange(date) }}
            />
            <Text style={[styles.DatePickerText1, { marginTop: hp('1.5%') }]}>  End: </Text>
            <DatePicker
              style={styles.DatePicker1}
              // date={EndDate}
              mode="date"
              display="default"
              placeholder="select date"
              format="YYYY-MM-DD"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateInput: styles.DatePickerInput,
                dateIcon: styles.DatePickerIcon1,
                dateText: styles.DateText1
                ,
                // ... You can check the source to find the other keys.
              }}
              onDateChange={(date) => { endDateChange(date) }}
            />
         
       </View>
       </View>
      </View>
    </LinearGradient>
    );
  }
}
export default DetailScreen;

const styles = StyleSheet.create({
    svgCurve: {
      position: 'absolute',
      width: Dimensions.get('window').width
    },
    headerText: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#fff',
      textAlign: 'center',
      marginTop: 35
    },
    DatePicker1:{marginRight:wp('13%')},
    DatePickerIcon1: {marginRight:wp('8%') },
    DatePickerText1:{ color: "#E64A19", fontWeight: 'bold'},
    DatePicker: { width: wp('37%'), marginLeft: wp('0.5%')},
    DatePickerText: { marginLeft:wp('3%') ,color: "#E64A19", fontWeight: 'bold' },
    DatePickerInput: { height: hp('3%') },
    DatePickerIcon: {marginRight:wp('3%') },
    DateText: { color: "#800080" },  
  });