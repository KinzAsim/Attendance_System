import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    View,
    Platform,
    Text,
    FlatList,
    TouchableOpacity,
    Image,
    SafeAreaView,
    Dimensions,
    AppState,
    Alert,
    ActivityIndicator, TimePickerAndroid
  } from 'react-native';
  import { Card } from 'react-native-elements';
  import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
  import { colors } from '../../../style';
  import {Divider} from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';


class LogsScreen extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        const DATA = [
            {
              id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
              title: 'First Item',
            },
            {
              id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
              title: 'Second Item',
            },
            {
              id: '58694a0f-3da1-471f-bd96-145571e29d72',
              title: 'Third Item',
            },
          ];
        return(
            <View style={{flex:1}}>
            <ScrollView>
                <Text style={{fontSize:20,marginTop:hp('2%'),marginLeft:wp('3%')}}>Employee List:</Text>
            <View style={{marginTop:hp('1%')}}>
            <Card containerStyle={[styles.cardMainContainer,{backgroundColor:'#fff', marginTop:hp('1%'), elevation:30
            }]}> 
            <Card.Title style={styles.cardTitle}>Employee Name                                   Employee Id</Card.Title>                                  
            </Card>
            </View>
            <View style={styles.container}>
            <FlatList
            data={DATA}
            renderItem={({item}) => <Item updated_at={item.updated_at} created_at={item.created_at} duration={item.duration}
            keyExtractor={item => item.id}
            />
                {/* <View style={{flexDirection:'row'}}>
                <Text style={styles.text}>Kinza</Text>
                <Text style={{marginLeft:wp('55%')}}>1122</Text>
                </View>
                <Divider style={{ backgroundColor: 'blue',marginTop:hp('2%'), marginHorizontal:wp('1%') ,marginBottom:hp('2%')}}/>
                <View style={{flexDirection:'row'}}>
                <Text style={styles.text}>Kinza</Text>
                <Text style={{marginLeft:wp('55%')}}>1122</Text>
                </View>
                <Divider style={{ backgroundColor: 'blue',marginTop:hp('2%'), marginHorizontal:wp('1%') , marginBottom:hp('2%')}}/>
                <View style={{flexDirection:'row'}}>
                <Text style={styles.text}>Kinza</Text>
                <Text style={{marginLeft:wp('55%')}}>1122</Text>
                </View>
                <Divider style={{ backgroundColor: 'blue',marginTop:hp('2%'), marginHorizontal:wp('1%'), marginBottom:hp('2%') }}/>
                <View style={{flexDirection:'row'}}>
                <Text style={styles.text}>Kinza</Text>
                <Text style={{marginLeft:wp('55%')}}>1122</Text>
                </View>
                <Divider style={{ backgroundColor: 'blue',marginTop:hp('2%'), marginHorizontal:wp('1%'), marginBottom:hp('2%') }}/>
                <View style={{flexDirection:'row'}}>
                <Text style={styles.text}>Kinza</Text>
                <Text style={{marginLeft:wp('55%')}}>1122</Text>
                </View>
                <Divider style={{ backgroundColor: 'blue',marginTop:hp('2%'), marginHorizontal:wp('1%'), marginBottom:hp('2%') }}/>
                <View style={{flexDirection:'row'}}>
                <Text style={styles.text}>Kinza</Text>
                <Text style={{marginLeft:wp('55%')}}>1122</Text>
                </View>
                <Divider style={{ backgroundColor: 'blue',marginTop:hp('2%'), marginHorizontal:wp('1%'), marginBottom:hp('2%') }}/>
                <View style={{flexDirection:'row'}}>
                <Text style={styles.text}>Kinza</Text>
                <Text style={{marginLeft:wp('55%')}}>1122</Text>
                </View>
                <Divider style={{ backgroundColor: 'blue',marginTop:hp('2%'), marginHorizontal:wp('1%'), marginBottom:hp('2%') }}/>
                <View style={{flexDirection:'row'}}>
                <Text style={styles.text}>Kinza</Text>
                <Text style={{marginLeft:wp('55%')}}>1122</Text>
                </View>
                <Divider style={{ backgroundColor: 'blue',marginTop:hp('2%'), marginHorizontal:wp('1%'), marginBottom:hp('2%') }}/>
                <View style={{flexDirection:'row'}}>
                <Text style={styles.text}>Kinza</Text>
                <Text style={{marginLeft:wp('55%')}}>1122</Text>
                </View>
                <Divider style={{ backgroundColor: 'blue',marginTop:hp('2%'), marginHorizontal:wp('1%') ,marginBottom:hp('2%')}}/>
                <View style={{flexDirection:'row'}}>
                <Text style={styles.text}>Kinza</Text>
                <Text style={{marginLeft:wp('55%')}}>1122</Text>
                </View>
                <Divider style={{ backgroundColor: 'blue',marginTop:hp('2%'), marginHorizontal:wp('1%'), marginBottom:hp('2%') }}/>
                <View style={{flexDirection:'row'}}>
                <Text style={styles.text}>Kinza</Text>
                <Text style={{marginLeft:wp('55%')}}>1122</Text>
                </View>
                <Divider style={{ backgroundColor: 'blue',marginTop:hp('2%'), marginHorizontal:wp('1%') , marginBottom:hp('2%')}}/>
                <View style={{flexDirection:'row'}}>
                <Text style={styles.text}>Kinza</Text>
                <Text style={{marginLeft:wp('55%')}}>1122</Text>
                </View>
                <Divider style={{ backgroundColor: 'blue',marginTop:hp('2%'), marginHorizontal:wp('1%'), marginBottom:hp('2%') }}/>
                <View style={{flexDirection:'row'}}>
                <Text style={styles.text}>Kinza</Text>
                <Text style={{marginLeft:wp('55%')}}>1122</Text>
                </View>
                <Divider style={{ backgroundColor: 'blue',marginTop:hp('2%'), marginHorizontal:wp('1%'), marginBottom:hp('2%') }}/>
                <View style={{flexDirection:'row'}}>
                <Text style={styles.text}>Kinza</Text>
                <Text style={{marginLeft:wp('55%')}}>1122</Text>
                </View>
                <Divider style={{ backgroundColor: 'blue',marginTop:hp('2%'), marginHorizontal:wp('1%'), marginBottom:hp('2%') }}/>
                <View style={{flexDirection:'row'}}>
                <Text style={styles.text}>Kinza</Text>
                <Text style={{marginLeft:wp('55%')}}>1122</Text>
                </View>
                <Divider style={{ backgroundColor: 'blue',marginTop:hp('2%'), marginHorizontal:wp('1%'), marginBottom:hp('2%') }}/>
                <View style={{flexDirection:'row'}}>
                <Text style={styles.text}>Kinza</Text>
                <Text style={{marginLeft:wp('55%')}}>1122</Text>
                </View>
                <Divider style={{ backgroundColor: 'blue',marginTop:hp('2%'), marginHorizontal:wp('1%'), marginBottom:hp('2%') }}/>
                <View style={{flexDirection:'row'}}>
                <Text style={styles.text}>Kinza</Text>
                <Text style={{marginLeft:wp('55%')}}>1122</Text>
                </View>
                <Divider style={{ backgroundColor: 'blue',marginTop:hp('2%'), marginHorizontal:wp('1%'), marginBottom:hp('2%') }}/> */}
            </View>
            </ScrollView>
            </View>
            
        );
    }
}
export default LogsScreen;

const styles = StyleSheet.create({
    container: {
       flex:1,
       backgroundColor:'#fff',
       marginHorizontal:hp('2%'),
       marginBottom:hp('2%'),
       padding:wp('3%'),
       elevation:30     
    },    
    cardMainContainer:   {                       
       
        shadowOpacity: 0.9,
        shadowRadius: wp('3%'), 
        // borderRadius:wp('8%')
    },   
    cardTitle: {
        fontSize: 20,
        color:'#E64A19'
    },
    text:{
        marginLeft:wp('5%')
    }
})