import React from 'react';
import {View,Text,StyleSheet,ScrollView,TextInput,TouchableOpacity,Button} from 'react-native';
import { Card } from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {colors} from '../../../style';
import ActionButton from 'react-native-action-button';

class SettingScreen extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View>           
            <Card containerStyle={[styles.cardMainContainer,{backgroundColor:'#ff7043', marginTop:hp('1%'), elevation:30, borderRadius:wp('8%')}]}
            wrapperStyle={{flexDirection:'row'}}>             
            <Card.Title style={styles.cardTitle}>LEARN: </Card.Title>  
            <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, justifyContent:'center' ,width:wp('30%'),backgroundColor:'#fff',marginLeft:wp('5%')}}
            onChangeText={text => onChangeText(text)}
            //value={value}
            />
            <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, justifyContent:'center' ,width:wp('30%'),backgroundColor:'#fff',marginLeft:wp('5%')}}
            onChangeText={text => onChangeText(text)}
            //value={value}
            />
            {/* <Card.Divider/>  */}    
                                  
            </Card>
           
            <Card containerStyle={[styles.cardMainContainer,{backgroundColor:'#ff5722', marginTop:hp('1%'), elevation:30, borderRadius:wp('8%'),flexDirection:'row'}]} 
            wrapperStyle={{flexDirection:'row'}}>      
            <Card.Title style={styles.cardTitle}> Attendance Thresholds: </Card.Title> 
            <View>
            <Text style={{color:'#fff',fontSize:19,flexDirection:'row'}}>Time For Late Attendance</Text>   
            <TextInput
                placeholder="9:00 AM" 
                placeholderTextColor="#fff"
                // style={styles.input}
                autoCapitalize = 'none'
                //onChangeText={text => this.setState({ email: text })}
                //value={value} 
            />    
            </View>
            
            {/* <Text style={{color:'#fff',fontSize:19}}>Time For Absense</Text>  
            <TextInput
                placeholder="9:00 AM" 
                placeholderTextColor="#fff"
                // style={styles.input}
                autoCapitalize = 'none'
                //onChangeText={text => this.setState({ email: text })}
                //value={value} 
            /> */}
                                           
            </Card>     

            <Card containerStyle={[styles.cardMainContainer,{backgroundColor:'#bf360c', marginTop:hp('1%'), elevation:30, borderRadius:wp('8%')}]}
            wrapperStyle={{flexDirection:'row'}}>             
            <Card.Title style={styles.cardTitle}>AutoMode Switching: </Card.Title>  
            
            {/* <Card.Divider/>  */}   
            <TouchableOpacity style={{marginTop:hp('3%'),width:wp('30%'),height:hp('7%'),backgroundColor:'#fff',borderRadius:15,marginLeft:wp('10%')}}>
                <Text style={{marginHorizontal:wp('4%'),marginTop:hp('2%'),color:'#ff3d00',fontSize:18}}>
                Submit Times
                </Text>
            </TouchableOpacity>                                            
            </Card>

            <Card containerStyle={[styles.cardMainContainer,{backgroundColor:'#ff3d00', marginTop:hp('1%'), elevation:30,
            paddingTop:hp('3%'),borderRadius:wp('8%')}]}
            wrapperStyle={{flexDirection:'row'}}>             
            <Card.Title style={styles.cardTitle}>Current Mode: </Card.Title>  
            <Text style={{marginHorizontal:hp('1%'),marginTop:hp('4.1%'),fontSize:20,color:'#fff'}}>Check in</Text>
            {/* <Card.Divider/>  */}   
            <TouchableOpacity style={{marginTop:hp('3%'),width:wp('40%'),height:hp('7%'),backgroundColor:'#fff',borderRadius:15,marginLeft:wp('5%')}}>
                <Text style={{marginHorizontal:wp('4%'),marginTop:hp('2%'),color:'#ff3d00',fontSize:18}}>
                    Change To Check Out
                </Text>
            {/* <Button
            onPress={console.log('Kinza')}
            title="Learn More"
            style={{width:wp('30%'),height:hp('30%')}}
            color="#000"
            accessibilityLabel="Learn more about this purple button"
            /> */}
            </TouchableOpacity>                                                
            </Card>      
            </View>
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
         width:wp('95%'),
         height:hp('20%'),                     
         elevation:60,
         shadowOpacity: 0.9,
         shadowRadius: wp('3%'), 
         borderRadius:wp('8%')
     },
})