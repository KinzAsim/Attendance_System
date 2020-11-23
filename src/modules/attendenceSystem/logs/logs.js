import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    SafeAreaView,
    FlatList, 
    ScrollView,
    ImageBackground,
    ActivityIndicator
  } from 'react-native';
  import { Card } from 'react-native-elements';
  import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { colors } from '../../../style';
import Item from './LogsItem';
import { Divider } from 'react-native-elements';
import {getEmpList} from '../../../redux/actions/AttAction';
import {connect} from 'react-redux';
import { Value } from 'react-native-reanimated';

const background = require("../../../../assets/images/background.jpg")

class LogScreen extends React.Component{
  constructor(props){
    super(props);
    this.state={
    //   DATA:[{ id:'256',
    // title:'lmlmlm'},{ id:'256',
    // title:'lmlmlm'}]
    }
    
  }
 
  async componentDidMount () {
        await this.props.getEmpList();
        //console.log('list')
      }
  render(){
    const{DATA} = this.state;
    const{attendance,AttLoading} = this.props;
    console.log('Attendance',AttLoading)

  return( 
        <>         
          {AttLoading ? (
            <View style={{flex:1, alignItems:'center',justifyContent:'center',backgroundColor:'white'}}>
            <ActivityIndicator size="large" color="#ff3d00"/>
            </View>):(
            <View style={styles.container}>
              <ImageBackground source={background} style={{height:'100%'}}>
              <Text style={{marginHorizontal:wp('5%'),marginVertical:hp('3%'),fontSize:20,fontWeight:'bold'}}>Employee List:</Text>
              <SafeAreaView>
              <FlatList                             
              data={ attendance }                               
              renderItem={({item}) => <Item name={item.name} emp_id={item.emp_id}/>}
              keyExtractor={(item, index) => index.toString()}
              />
              </SafeAreaView>
              </ImageBackground>
            </View>
          )}
        </>
        );
      }
    }
  
const mapStateToProps = (state) => ({
  attendance : state.attendance.attendance,
  AttLoading: state.attendance.AttLoading
      })

export default  connect(mapStateToProps,{getEmpList})(LogScreen);

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

 // <View style={{flex:1,backgroundColor:'#bf360c'}}>
      // <View style={{borderBottomLeftRadius:90,backgroundColor:'#FFCCBC',flex:0.4}}> 
      // <View style={{backgroundColor:'#fff',flex:0.4,borderBottomLeftRadius:90}}></View>
      // </View>
      // <View style={{borderBottomLeftRadius:90,backgroundColor:'transparent',flex:1}}> 
      // </View>  
      // </View>
      // <View style={{flex:1, alignItems:'center',justifyContent:'center',backgroundColor:'white'}}>
      //   <ActivityIndicator size="large" color="#fff"/>
      // </View>