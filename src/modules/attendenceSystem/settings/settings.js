import React from 'react';
import {View,Text,StyleSheet,ScrollView,TextInput,TouchableOpacity,Button} from 'react-native';
import { Card } from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {colors} from '../../../style';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DateTimePicker from '@react-native-community/datetimepicker';
import DatePicker from 'react-native-custom-datetimepicker'

class SettingScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={
          time:'',
          mode:'date',
          show:false
        }
    }
    onChange = (event, selectedTime) => {
        const currentTime = selectedTime || time;
        this.setState({
            show:Platform.OS === 'ios',
            time:currentTime
        })
      };
    showMode = (currentMode) => {
        this.setState({
            show:true,
            mode:currentMode
        })
      };
    
    showTimePicker = () => {
        this.setState({
            mode:'time'
        })
       
      };
    onChangeText1 = (text) => {
        console.log('done',text)
    }
    onChangeText2 = (text) => {
        console.log('done',text)
    }
    onChangeText3 = (time) => {
        this.setState({
            time:time
        })
        console.log('done',time)
    }
    onChangeText4 = (text) => {
        console.log('done',text)
    }
    onChangeText5 = (text) => {
        console.log('done',text)
    }
    onChangeText6 = (text) => {
        console.log('done',text)
    }
    
    render(){
        console.log('Time',this.state.Time)
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
            onChangeText={time => this.onChangeText1(time)}
            placeholder='Employee Name*'
            //value={value}
            />
          
            <TextInput
            style={{ height: hp('6%'),marginTop:hp('2%'),marginLeft:wp('7%'),borderColor: 'white', borderWidth: 1, justifyContent:'center' ,width:wp('60%')
            ,borderRadius:10,backgroundColor:'#fff'}}
            onChangeText={text => this.onChangeText2(text)}
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
            <TouchableOpacity onPress={()=>this.showTimePicker()}>
            <Text style={{alignSelf:'flex-end',color:'#fff'}}>Set Time</Text>
           </TouchableOpacity>
           <Text>{this.state.Time}</Text>
            {/* <TextInput
            style={{ height:hp('5%'), borderRadius: 10, justifyContent:'center' ,width:wp('60%'),
            borderColor:'#fff',marginLeft:wp('5%')}}
            defaultValue={this.state.Time}
            placeholderTextColor="#fff"
            underlineColorAndroid="#fff"
            //onChangeText={time => this.onChangeText3(time)}
            //value={value}
            /> */}
            {/* <DateTimePickerModal
            isVisible={this.state.isDatePickerVisible}
            mode="time"
            onConfirm={(time)=>this.handleConfirm(time)}
            onCancel={this.hideDatePicker}
            /> */}
             {/* <DateTimePicker
          testID="dateTimePicker"
          value={time}
          mode={this.state.mode}
          is24Hour={true}
          display="default"
          onChange={(event, selectedTime)=> this.onChange(event, selectedTime)}
        /> */}
             <Text style={{color:'#fff',marginLeft:wp('4%'),marginTop:hp('5%')}}>Time For Absense</Text>
            <TextInput
            style={{ height:hp('5%'), borderRadius: 10, justifyContent:'center' ,width:wp('60%'),
            borderColor:'#fff',marginLeft:wp('5%')}}
            placeholder="12:00 PM" 
            placeholderTextColor="#fff"
            underlineColorAndroid="#fff"
            onChangeText={text => this.onChangeText4(text)}
            //value={value}
            /> 
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
            <TextInput
            style={{ height:hp('5%'), borderRadius: 10,  justifyContent:'center' ,width:wp('60%'),
            borderColor:'#fff',marginLeft:wp('5%')}}
            placeholder="7:08 AM" 
            placeholderTextColor="#fff"
            underlineColorAndroid="#fff"
            onChangeText={text => this.onChangeText5(text)}
            //value={value}
            />
             <Text style={{color:'#fff',marginLeft:wp('4%'),marginTop:hp('5%')}}>Check Out Time Auto Switch</Text>
            <TextInput
            style={{ height:hp('5%'), borderRadius: 10,  justifyContent:'center' ,width:wp('60%'),
            borderColor:'#fff',marginLeft:wp('5%')}}
            placeholder="2:18 AM" 
            placeholderTextColor="#fff"
            underlineColorAndroid="#fff"
            onChangeText={text => this.onChangeText6(text)}
            //value={value}
            /> 
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
            <TouchableOpacity style={{marginTop:hp('10%'),width:wp('50%'),height:hp('7%'),backgroundColor:'#fff',borderRadius:15,marginLeft:wp('13%')}}>
                <Text style={{marginHorizontal:wp('1%'),marginTop:hp('2%'),color:'#ff3d00',fontSize:18,paddingLeft:wp('5%')}}>
                Change To Check Out
                </Text>
            </TouchableOpacity>                                    
             </Card>
            </ScrollView>          
            
        );
    }
}

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