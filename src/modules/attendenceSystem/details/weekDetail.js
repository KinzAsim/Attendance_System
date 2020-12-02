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

const buttons = ['PAST WEEK', 'PAST MONTH']
LogBox.ignoreLogs(['VirtualizedLists should never be']);
LogBox.ignoreLogs(['undefined is not an object (evaluating']);




class DetailsScreen extends React.Component{
  constructor(props){
    super(props);
    this.state={
      employeesList:[],
      selectedList:null,
      selectedListValue:null,
      startTime:moment().subtract(30,'days'),
      endTime:moment().add(1,'day'),
      btnType:'week'
    }    
  }
  async componentDidMount (item) {
    const{employees,allAttendance} = this.props;
    const{selectedListValue,btnType} = this.state;
    
    const done = await this.props.getEmpList();
    
    if(done === 'done'){
      const temp = [];
  
      employees.forEach(e => {
        // temp.push(e.name);
        let obj = {
          label: e.name,
          value: e.name
        }
        temp.push(obj);
      });
      this.setState({
      employeesList:temp,
      selectedListValue:temp[0].value
     });
    }
   
    const employee = employees.filter(e => e.name === selectedListValue);
    if(employee[0].id !== undefined){
      this.props.allAttendanceDetail('week',employee[0].id); 
    }
    }
  

  // handleChange = (value) => {
  //   const{startTime,endTime,btnType,selectedListValue} = this.state;
  //    const{allAttendance,employees} = this.props;
  //    const employee = employees.filter(e => e.name === selectedListValue);
  //     if(value === 0){
  //       this.setState({
  //         btnType: 'week',
  //       });
  //     }else if(value === 1){
  //       this.setState({
  //         btnType: 'custom',
  //       });
  //     }

  //     if(btnType === 'week'){
  //       this.props.allAttendanceDetail(btnType,employee[0].id); 
  //     }else if(btnType === 'custom'){
  //       this.props.allAttendanceDetail(btnType,employee[0].id,startTime,endTime); 
  //     }
  // }

  handleList = (item) => {
    const{allAttendance,employees} = this.props;
    const{selectedListValue,btnType,startTime,endTime} = this.state;
    const employee = employees.filter(e => e.name === item.value);
    this.setState({
      selectedList: item.title,
      selectedListValue: item.value,
    });

   
      this.props.allAttendanceDetail('week',employee[0].id); 
   
     
  }

  render(){
    const {DATA,startTime,endTime,selectedListValue,employeesList,btnType} = this.state;
    const {allAttendance, allAttendanceLoading,employee_name,employees} = this.props;
    // console.log('week',allAttendance);

    return(
      
      <View style={{backgroundColor:'#fff',flex:1,
          borderRadius:30,paddingBottom:hp('5%'),paddingTop:hp('5%'),elevation:20}}>
        <View style={{justifyContent:'center',alignItems:'center'}}>  
        <Text style={{fontWeight:'bold',color:'#000'}}> WEEK</Text>
        </View>
        <Divider style={{backgroundColor:'#E64A19',marginTop:hp('0.5%'),marginRight:wp('30%'),marginLeft:wp('30%'),marginBottom:hp('3%')}}/>
         
         <DropDownPicker
                items={employeesList}
                placeholder='Select Employee'
                defaultValue={selectedListValue}
                containerStyle={{height: hp('6%'),marginHorizontal:wp('3%')}}
                style={{backgroundColor: '#fafafa',zIndex:40}}
                itemStyle={{
                    justifyContent: 'flex-start'
                }}
                dropDownStyle={{backgroundColor: '#fafafa'}}
                arrowSize={20}
                arrowStyle={{color:'#000',borderRadius:10}}
                showArrow={true}
                onChangeItem={(item)=>this.handleList(item)}
            />
          
          {allAttendanceLoading ? (
            <View style={{flex:1,backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
            <ActivityIndicator size="large" color="#ff3d00" />
            </View>
          ): (
          <ScrollView style={{marginBottom:hp('3%'),marginTop:hp('5%')}}>
            
              <FlatList                             
              data={ allAttendance }                               
              renderItem={({item}) => <Item type={this.state.btnType} checkIn={item.checkIn} checkOut={item.checkOut} day={item.day} user_name={item.user_name} overtime={item.overtime} attendance={item.attendance}/>}
              keyExtractor={(item, index) => index.toString()}
              />
             
          </ScrollView>)}
          
       {/* <TouchableOpacity onPress={()=> this.props.navigation.navigate('detail')} 
       style={{alignSelf:'center',borderRadius:10,backgroundColor:'#E64A19',justifyContent:'center',alignItems:'center',width:wp('50%'),height:hp('5%')}}>
        <Text style={{color:'#fff',fontWeight:'bold'}}>PAST MONTH</Text>
       </TouchableOpacity> */}
      </View>
    
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