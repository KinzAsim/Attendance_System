import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    SafeAreaView,
    FlatList, ScrollView,
    ImageBackground
  } from 'react-native';
  import { Card } from 'react-native-elements';
  import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { colors } from '../../../style';
import Item from './LogsItem';
import { Divider } from 'react-native-elements';

const background = require("../../../../assets/images/background.jpg")
class LogScreen extends React.Component{
  constructor(props){
    super(props);
    this.state={
      DATA:[{
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            name: 'First Item',
          },
          {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            name: 'Second Item',
          },
          {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            name: 'Third Item',
          },
          {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            name: 'First Item',
          },
          {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            name: 'Second Item',
          },
          {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            name: 'Third Item',
          },
          {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            name: 'Third Item',
          },
          {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            name: 'First Item',
          },
          {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            name: 'Second Item',
          },
          {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            name: 'Third Item',
          },
          {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            name: 'Third Item',
          },
          {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            name: 'First Item',
          },
          {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            name: 'Second Item',
          },
          {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            name: 'Third Item',
          }]
    }
    
  }
 
 
  render(){
    const{DATA} = this.state;
    return(     
      // <View style={{flex:1,backgroundColor:'#bf360c'}}>
      // <View style={{borderBottomLeftRadius:90,backgroundColor:'#FFCCBC',flex:0.4}}> 
      // <View style={{backgroundColor:'#fff',flex:0.4,borderBottomLeftRadius:90}}></View>
      // </View>
      // <View style={{borderBottomLeftRadius:90,backgroundColor:'transparent',flex:1}}>
      //  
      // </View>  
      // </View>
      <View style={styles.container}>
      <ImageBackground source={background} style={{height:'100%'
      }}>
         <Text style={{marginHorizontal:wp('5%'),marginVertical:hp('3%'),fontSize:20,fontWeight:'bold'}}>Employee List:</Text>
      <SafeAreaView>
      <FlatList                             
      data={ DATA }                               
      renderItem={({item}) => <Item/>}
      keyExtractor={(item, index) => index.toString()}
      />
      
        </SafeAreaView>
      </ImageBackground>
    </View>
     
       
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default LogScreen;

