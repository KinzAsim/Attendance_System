import React from 'react';
import {View,Text,TouchableOpacity,StyleSheet,Dimensions, StatusBar,SafeAreaView,FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ButtonGroup, Card } from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Item from './detaiIstem'

const buttons = ['PAST WEEK', 'PAST MONTH']

class DetailScreen extends React.Component{
  constructor(props){
    super(props);
    this.state={
      DATA:[{
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
      <View style={{flex:0.9,backgroundColor:'#fff',marginTop:hp('5%'),marginHorizontal:wp('5%'),borderRadius:30}}>
        <View style={{flexDirection:'row'}}>      
          </View>
          <SafeAreaView>
          <FlatList                             
          data={ DATA }                               
          renderItem={({item}) => <Item/>}
          keyExtractor={(item, index) => index.toString()}
          />
          </SafeAreaView>
       
       <ButtonGroup
       buttons={buttons}
       innerBorderStyle={{color:'#ffccbb'}}
       textStyle={{color:'#fff'}}
       containerStyle={{height:50,marginTop:hp('10%'),backgroundColor:'#ffccbb',borderColor:'#ffccbb'}}/>
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
    }
  });