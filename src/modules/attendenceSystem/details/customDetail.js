import React from 'react';
import {View,Text,TouchableOpacity,StyleSheet,Dimensions, StatusBar,SafeAreaView,ActivityIndicator,FlatList,ScrollView,LogBox} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ButtonGroup, Card,Divider } from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Item from './customItem';
import DatePicker from 'react-native-datepicker';
import DropDownPicker from 'react-native-dropdown-picker';
import {connect} from 'react-redux';
import moment from 'moment';
import {allAttendanceDetail,getEmpList} from '../../../redux/actions/AttAction';


const buttons = ['PAST WEEK', 'PAST MONTH']
LogBox.ignoreLogs(['VirtualizedLists should never be']);
LogBox.ignoreLogs(['undefined is not an object (evaluating']);
LogBox.ignoreLogs(['Animated:`useNativeDriver`was not']);
LogBox.ignoreLogs(['DatePickerAndroid has been merged']);

class DetailScreen extends React.Component{
  constructor(props){
    super(props);
    this.state={
      employeesList:[],
      selectedList:null,
      selectedListValue:null,
      startTime:moment().subtract(30,'days'),
      endTime:moment().add(1,'day'),
      btnType:'custom'
    }    
  }
  async componentDidMount (value) {
    const{employees,allAttendance} = this.props;
    const{startTime,endTime,btnType,selectedListValue} = this.state;
    const employee = employees.filter(e => e.name === selectedListValue);
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
     })
    }
    if(employee[0].id !== undefined){
        this.props.allAttendanceDetail('custom',employee[0].id,startTime,endTime);
     }
  }

//   handleChange = (value) => {
//      const{allAttendance,employees} = this.props;    
//     //   if(value === 0){
//     //     this.setState({
//     //       btnType: 'week',
//     //     });
//     //   }else if(value === 1){
//     //     this.setState({
//     //       btnType: 'custom',
//     //     });
//     //   }
//     //   if(btnType === 'week'){
//     //     this.props.allAttendanceDetail(btnType,employee[0].id); 
//     //   }else if(btnType === 'custom'){
//         // this.props.allAttendanceDetail(btnType,employee[0].id,startTime,endTime); 
//     //   }
//   }

  handleList = (item) => {
    const{allAttendance,employees} = this.props;
    const{selectedListValue,btnType,startTime,endTime} = this.state;
    const employee = employees.filter(e => e.name === item.value);
    this.setState({
      selectedList: item.title,
      selectedListValue: item.value,
    });
    this.props.allAttendanceDetail(btnType,employee[0].id,startTime,endTime); 
    // if(btnType === 'week'){
    //   this.props.allAttendanceDetail(btnType,employee[0].id); 
    // }else if(btnType === 'custom'){
    //   this.props.allAttendanceDetail(btnType,employee[0].id,startTime,endTime); 
    // }     
  }

  startDateChange = (date) => {
    const{employees} = this.props;
    const{selectedListValue,endTime,btnType}= this.state;
    const employee = employees.filter(e => e.name === selectedListValue);   
    this.setState({
      startTime:date
    });
      this.props.allAttendanceDetail(btnType,employee[0].id,date,endTime)
  }

  endDateChange = (date) => {
    const{employees} = this.props;
    const{selectedListValue,startTime,btnType} = this.state;
    const employee = employees.filter(e => e.name === selectedListValue);
    this.setState({
      endTime:date,
    });
    this.props.allAttendanceDetail(btnType,employee[0].id,startTime,date)
  }

  render(){
    const {DATA,startTime,endTime,selectedListValue,employeesList,btnType} = this.state;
    const {allAttendance, allAttendanceLoading,employee_name,employees,empLoading} = this.props;
    console.log(allAttendance)

    return(
    
      <View style={{backgroundColor:'#fff',flex:1,
      borderRadius:30,paddingBottom:hp('5%'),paddingTop:hp('5%'),elevation:20}}>
        <View style={{justifyContent:'center',alignItems:'center'}}>  
        <Text style={{fontWeight:'bold',color:'#000'}}> MONTH</Text>
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
          <View style={{flexDirection:'row',marginHorizontal:hp('4%'),borderWidth:1,borderRadius:5,borderColor:'#fff',padding:wp('5%')}}>  
            {/* <Text style={{color:'#000'}}>Name: {employee_name}</Text> */}
            {/* <Text style={{marginLeft:wp('20%')}} numberOfLines={1}>Id: {emp_id}</Text> */}
          </View>
          {allAttendanceLoading ? (
            <View style={{flex:1,backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
            <ActivityIndicator size="large" color="#ff3d00" />
            </View>
          ): (
          <ScrollView>
            <FlatList                             
            data={ allAttendance }                               
            renderItem={({item}) => <Item attendance={item.attendance} checkIn={item.checkIn} checkOut={item.checkOut} date={item.date} overtime={item.overtime} user_name={item.user_name}   />}
            keyExtractor={(item, index) => index.toString()}
            />
            {/* type={this.state.btnType} */}
            {/* {this.state.btnType === 'week' ? (
              <FlatList                             
              data={ allAttendance }                               
              renderItem={({item}) => <Item type={this.state.btnType} checkIn={item.checkIn} checkOut={item.checkOut} day={item.day} user_name={item.user_name} overtime={item.overtime} attendance={item.attendance}/>}
              keyExtractor={(item, index) => index.toString()}
              />
            ) : (
              <FlatList                             
            data={ allAttendance }                               
            renderItem={({item}) => <Item type={this.state.btnType} checkIn={item.checkIn} checkOut={item.checkOut} day={item.date} user_name={item.user_name} overtime={item.overtime} attendance={item.attendance}/>}
            keyExtractor={(item, index) => index.toString()}
            />
            )} */}
            
          </ScrollView>)}
          <Text style={{fontWeight:'bold',alignSelf:'center',marginTop:hp('1%')}}>Custom:</Text>
            <Divider style={{backgroundColor:'#000',marginTop:hp('1%'),marginRight:wp('30%'),marginLeft:wp('30%')}}/>

       <View style={{flexDirection:'row',marginLeft:wp('10%'),marginRight:wp('15%')}}>
       <View style={{ flexDirection: 'row', marginTop: hp('1%'), justifyContent: 'center' }}>
            <Text style={[styles.DatePickerText, { marginTop: hp('1.5%')}]}>Start: </Text>
            <DatePicker
              style={styles.DatePicker}
              date={this.state.startTime}
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
              onDateChange={(date) =>  {this.startDateChange(date)} }
            />
            <Text style={[styles.DatePickerText1, { marginTop: hp('1.5%') }]}>  End: </Text>
            <DatePicker
              style={styles.DatePicker1}
               date={this.state.endTime}
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
              onDateChange={(date) =>  {this.endDateChange(date)}}
            />        
       </View>
       </View>

        {/* <TouchableOpacity onPress={()=> this.props.navigation.navigate('details')} 
       style={{alignSelf:'center',borderRadius:10,backgroundColor:'#E64A19',justifyContent:'center',alignItems:'center',width:wp('50%'),height:hp('5%'),marginTop:hp('3%')}}>
        <Text style={{color:'#fff',fontWeight:'bold'}}>PAST WEEK</Text>
       </TouchableOpacity> */}
       {/* <ButtonGroup
       buttons={buttons}
       innerBorderStyle={{color:'#ffccbb'}}
       textStyle={{color:'#fff'}}
       containerStyle={{height:hp('5%'),marginTop:hp('5%'),backgroundColor:'#ffccbb',borderColor:'#ffccbb'}}
       onPress={(value)=>this.handleChange(value)}/> */}
      </View>
 
    );
  }
}

const mapStateToProps = (state) => ({
  allAttendance : state.attendance.allAttendance,
  allAttendanceLoading : state.attendance.allAttendanceLoading,
  employees : state.attendance.employees,
  empLoading: state.attendance.employeesLoading
});

export default connect(mapStateToProps,{allAttendanceDetail,getEmpList})(DetailScreen);

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