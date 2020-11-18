import React, { useState } from 'react';
import {View,Text,StyleSheet,ScrollView,TextInput,TouchableOpacity,Button} from 'react-native';
import { Card } from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {colors} from '../../../style';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DateTimePicker from '@react-native-community/datetimepicker';
import DatePicker from 'react-native-custom-datetimepicker'

const SettingScreen = () => {
    const [time, setTime] = useState(new Date());
    const [mode, setMode] = useState('time');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedTime) => {
        //console.log('selected',selectedTime);
        const currentDate = selectedTime || time;
        setShow(Platform.OS === 'ios');
        setTime(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showTimepicker = () => {
        showMode('time');
    };
    const onChangeText1 = (text) => {
        console.log('done',text)
    }
    const onChangeText2 = (text) => {
        console.log('done',text)
    }
    const changeMode = (text) => {
        console.log('done',text)
    }
//     onChangeText4 = (text) => {
//         console.log('done',text)
//     }
//     onChangeText5 = (text) => {
//         console.log('done',text)
//     }
//     onChangeText6 = (text) => {
//         console.log('done',text)
//     }
    
//     render(){
        return(
            <ScrollView horizontal={true}>
            <Card containerStyle={[styles.cardMainContainer,{backgroundColor:'#ff7043', marginTop:hp('8%'), elevation:30, 
            borderRadius:wp('8%')}]}
            >             
            <Card.Title style={styles.cardTitle}>LEARN: </Card.Title> 
            <Card.Divider/>  
            <TextInput
            style={{ height: hp('6%'),marginTop:hp('10%'),marginLeft:wp('7%'),borderColor: 'white', borderWidth: 1, justifyContent:'center' ,width:wp('60%'),
            backgroundColor:'#fff',borderRadius:10}}
            onChangeText={text => onChangeText1(text)}
            placeholder='Employee Name*'
            //value={value}
            />
          
            <TextInput
            style={{ height: hp('6%'),marginTop:hp('2%'),marginLeft:wp('7%'),borderColor: 'white', borderWidth: 1, justifyContent:'center' ,width:wp('60%')
            ,borderRadius:10,backgroundColor:'#fff'}}
            onChangeText={text => onChangeText2(text)}
            placeholder='Employee Id*'
            //value={value}
             />
            {/* </Card>  */}
            
            {/* <Card.Divider/>  */}    
            <TouchableOpacity style={{marginTop:hp('10%'),width:wp('50%'),height:hp('7%'),backgroundColor:'#fff',borderRadius:15,marginLeft:wp('13%')}}>
                <Text style={{marginHorizontal:wp('4%'),marginTop:hp('2%'),color:'#ff3d00',fontSize:18}}
                >
                Change Mode To Learn
                </Text>
            </TouchableOpacity>                  
             </Card>

            <Card containerStyle={[styles.cardMainContainer,{backgroundColor:'#bf360c', marginTop:hp('8%'), elevation:30, borderRadius:wp('8%')}]}
            >             
            <Card.Title style={styles.cardTitle}> Attendance Thresholds: </Card.Title>
            <Card.Divider/>    
            <Text style={{color:'#fff',marginLeft:wp('4%'),marginTop:hp('5%')}}>Time For Late Attendance</Text>

            <TouchableOpacity onPress={showTimepicker}>
            <Text style={{alignSelf:'flex-end',color:'#fff'}}>Set Time</Text>
           </TouchableOpacity>
            {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={time}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={(event,value)=>onChange(event,value)}
            />
          )}
           <Text style={{borderColor:'#fff',marginLeft:wp('5%'),borderBottomWidth:1,color:'#fff',marginRight:wp('15%')}}>
              {/* {date !== undefined ? 'Time changed event response:\n' : ''} */}
              {time !== undefined ? time.toTimeString() : ''}
            </Text>

          <Text style={{color:'#fff',marginLeft:wp('4%'),marginTop:hp('5%')}}>Time For Absense</Text>
            <TouchableOpacity onPress={showTimepicker}>
            <Text style={{alignSelf:'flex-end',color:'#fff'}}>Set Time</Text>
           </TouchableOpacity>
           {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={time}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={(event,value)=>onChange(event,value)}
            />
            )}
            <Text style={{borderColor:'#fff',marginLeft:wp('5%'),borderBottomWidth:1,color:'#fff',marginRight:wp('15%')}}>
              {/* {date !== undefined ? 'Time changed event response:\n' : ''} */}
              {time !== undefined ? time.toTimeString() : ''}
            </Text>
            <TouchableOpacity style={{marginTop:hp('10%'),width:wp('50%'),height:hp('7%'),backgroundColor:'#fff',borderRadius:15,marginLeft:wp('13%')}}
             onPress={()=>console.log('Thresholds')}>
                <Text style={{marginHorizontal:wp('4%'),marginTop:hp('2%'),color:'#ff3d00',fontSize:18,paddingLeft:wp('9%')}}>
                Submit Times
                </Text>
            </TouchableOpacity>                 
             </Card>

        <Card containerStyle={[styles.cardMainContainer,{backgroundColor:'#ff3d00', marginTop:hp('8%'), elevation:30, borderRadius:wp('8%')}]}
        >             
            <Card.Title style={styles.cardTitle}> AutoMode Switching: </Card.Title>
            <Card.Divider/>    
            <Text style={{color:'#fff',marginLeft:wp('4%'),marginTop:hp('5%')}}>Check In Time Auto Switch</Text>
            <TouchableOpacity onPress={showTimepicker}>
            <Text style={{alignSelf:'flex-end',color:'#fff'}}>Submit Time</Text>
            {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={time}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={(event,value)=>onChange(event,value)}
            />
            )}
            <Text style={{borderColor:'#fff',marginLeft:wp('5%'),borderBottomWidth:1,color:'#fff',marginRight:wp('15%')}}>
              {/* {date !== undefined ? 'Time changed event response:\n' : ''} */}
              {time !== undefined ? time.toTimeString() : ''}
            </Text>
           </TouchableOpacity>
             <Text style={{color:'#fff',marginLeft:wp('4%'),marginTop:hp('5%')}}>Check Out Time Auto Switch</Text>
            <TouchableOpacity onPress={showTimepicker}>
            <Text style={{alignSelf:'flex-end',color:'#fff'}}>Submit Time</Text>
            {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={time}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={(event,value)=>onChange(event,value)}
            />
            )}
            <Text style={{borderColor:'#fff',marginLeft:wp('5%'),borderBottomWidth:1,color:'#fff',marginRight:wp('15%')}}>
              {/* {date !== undefined ? 'Time changed event response:\n' : ''} */}
              {time !== undefined ? time.toTimeString() : ''}
            </Text>
           </TouchableOpacity>
            <TouchableOpacity style={{marginTop:hp('10%'),width:wp('50%'),height:hp('7%'),backgroundColor:'#fff',borderRadius:15,marginLeft:wp('13%')}}>
                <Text style={{marginHorizontal:wp('4%'),marginTop:hp('2%'),color:'#ff3d00',fontSize:18,paddingLeft:wp('9%')}}>
                Submit Times
                </Text>
            </TouchableOpacity>                 
             </Card>
             
             <Card containerStyle={[styles.cardMainContainer,{backgroundColor:'#ff5722', marginTop:hp('8%'), elevation:30, borderRadius:wp('8%')}]}
            >             
            <Card.Title style={styles.cardTitle}>Current Mode: </Card.Title>  
            <Card.Divider/> 
            <Text style={{alignSelf:'center',fontSize:30,color:'#fff',marginTop:hp('10%')}}>Check in</Text>     
            <TouchableOpacity style={{marginTop:hp('10%'),width:wp('50%'),height:hp('7%'),backgroundColor:'#fff',borderRadius:15,marginLeft:wp('13%')}}
            onPress={changeMode()}>
                <Text style={{marginHorizontal:wp('1%'),marginTop:hp('2%'),color:'#ff3d00',fontSize:18,paddingLeft:wp('5%')}}>
                Change To Check Out
                </Text>
            </TouchableOpacity>                                    
             </Card>
            </ScrollView>          
            
        );
     }
// }

export default SettingScreen;

const styles = StyleSheet.create({
    cardTitle:{
        fontSize: 20,
        marginTop: hp('4.0%'),
        color:'#ffff',
        
    },
     cardMainContainer:{ 
         flex:1,
         width:wp('86%'),
         height:hp('75%'),
         marginTop:hp('30%'),
         elevation:60,
         shadowOpacity: 0.9,
         shadowRadius: wp('3%'), 
         borderRadius:wp('8%'),
     },
})