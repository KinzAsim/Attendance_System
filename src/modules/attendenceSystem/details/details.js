import React from 'react';
import {View,Text,TouchableOpacity,StyleSheet,Dimensions, StatusBar,SafeAreaView,ActivityIndicator,FlatList,ScrollView,LogBox} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ButtonGroup, Card,Divider } from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Item from './weekItem';
import DatePicker from 'react-native-datepicker';
import DropDownPicker from 'react-native-dropdown-picker';
import {connect} from 'react-redux';
import moment from 'moment';
import {allAttendanceDetail,getEmpList} from '../../../redux/actions/AttAction';
import Week from '../details/weekDetail';
import Custom from '../details/customDetail';

const buttons = ['PAST WEEK', 'PAST MONTH']
LogBox.ignoreLogs(['VirtualizedLists should never be']);
LogBox.ignoreLogs(['undefined is not an object (evaluating']);



class DetailsScreen extends React.Component{
  constructor(props){
    super(props);
    this.state={
      selectedIndex: 0
    }    
  }

  handleChange=(value)=>{
    this.setState({
      selectedIndex:value
    })
  }

  render(){ 
    const {selectedIndex} = this.state;
    console.log(selectedIndex);   

    return(
      <LinearGradient colors={['#fff', '#ffccbb', '#ff3d00']} style={{flex:1}}>
      <View style={{backgroundColor:'#fff',flex:0.99,marginHorizontal:hp('2%'),marginTop:hp('2%'),marginBottom:hp('2%'),
        borderRadius:30,paddingTop:5,elevation:20}}>
        <ButtonGroup
          buttons={buttons}
          innerBorderStyle={{backgroundColor:'#fff'}}
          textStyle={{color:'#E64A19'}}
          containerStyle={{height:hp('5%'),backgroundColor:'transparent',borderColor:'#fff'}}
          onPress={(value)=>this.handleChange(value)}/>
        {selectedIndex === 0 ? (
          <Week/>
        ): selectedIndex === 1 ? (<Custom/>):(null)}
        
      </View>
      
    </LinearGradient>
    );
  }
}

const mapStateToProps = (state) => ({
  allAttendance : state.attendance.allAttendance,
  allAttendanceLoading : state.attendance.allAttendanceLoading,
  employees : state.attendance.employees,
});

export default connect(mapStateToProps,{allAttendanceDetail,getEmpList})(DetailsScreen);

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
    DateText: { color: "#E64A19" },  
    DateText1: { color: "#E64A19" },  
  });