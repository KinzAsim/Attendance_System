import React from 'react';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
//import {TableView} from "react-native-responsive-table"
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  ViewBase,
  ActivityIndicator,
  FlatList,
  LogBox
} from 'react-native';
import DatePicker from 'react-native-datepicker';
import { Card, ListItem, Button, Icon, Overlay } from 'react-native-elements'
import {connect} from 'react-redux';
import {dailySummary} from '../../../redux/actions/AttAction';
import {DataTable} from 'react-native-paper';
import moment from 'moment';
import Item from './IdItem';
import { Divider } from 'react-native-elements';

const background = require("../../../../assets/images/A.logo.png")
LogBox.ignoreLogs(['Require cycle: node_modules']);

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible1: false,
      visible2:false,
      startTime:moment().subtract(30,'days'),
      endTime:moment().add(1,'day'),
      tableHead: ['Name', 'Id', 'Status']
    }
  }

  onClick_Daily = () => {
    const{startTime,endTime}=this.state;
    this.setState({
      visible1:true
    })
   this.props.dailySummary('daily');
  }
  onClick_Monthly = () => {
    const{startTime,endTime}=this.state;
    this.setState({
      visible2:true
    })
    this.props.dailySummary('custom',startTime,endTime);
  }
  onBack_Daily = () => {
    this.setState({
      visible1:false
    })
  }
  onBack_Monthly = () => {
    this.setState({
      visible2:false
    })
    
  }
  // static navigationOption = {
  //   title: 'Overview'
  // }
  render() {
    const state = this.state;
    const {summary,summaryLoading,absents,lates,presents}= this.props;
    //console.log('render',summary)


    return (
      <View style={styles.container}>
        <Image source={background} style={styles.image}></Image>
        
        <Card containerStyle={styles.cardMainContainer}>
          <Text style={styles.heading1}>Summary</Text>
          <Divider style={{backgroundColor:'#000',marginRight:wp('2%'),marginBottom:hp('1%')}}/>
          <View style={{justifyContent:'space-between',flexDirection:'row'}}>
          <Text style={{fontSize:12,paddingRight:1,fontWeight:'bold'}}>Total Absent: </Text>
          <Text style={{fontSize:12,paddingRight:5,color:'#E64A19'}}>2</Text>
          <Text style={{fontSize:12,paddingRight:1,marginLeft:wp('1%'),fontWeight:'bold'}}>Total Present: </Text>
          <Text style={{fontSize:12,paddingRight:5,color:'#E64A19'}}>12</Text>
          <Text style={{fontSize:12,paddingRight:5,marginLeft:wp('1%'),fontWeight:'bold'}}>Total Late: </Text>
          <Text style={{fontSize:12,paddingRight:5,color:'#E64A19'}}>1</Text>
          </View>
          <TouchableOpacity style={[styles.btn, { marginTop: hp('3%') }]} onPress={() => this.onClick_Daily()}>
          <Text style={styles.btnText}>DAILY SUMMARY</Text>
          </TouchableOpacity>
          <Overlay isVisible={this.state.visible1} onBackdropPress={()=>this.onBack_Daily()}
            fullScreen={true} 
            // backdropStyle={{padding:20}}
            overlayStyle={{width:wp('95%'),height:hp('80%'),borderRadius:30,paddingBottom:hp('5%')}}>
          <View style={{flex:1}}>
          <Text style={{marginBottom:hp('1%'),fontWeight:'bold',alignSelf:'center'}}>Daily Attendance Summary:</Text>
        <View style={styles.container1}>
        <DataTable>
          <DataTable.Header>
          <DataTable.Title style={{flex:2}}>
            <Text style={{fontWeight:'bold',color:'#E64A19'}}>Name</Text></DataTable.Title>
          <DataTable.Title style={{flex:1}}>
            <Text style={{fontWeight:'bold',color:'#E64A19'}}>ID</Text></DataTable.Title>
          <DataTable.Title>
          <Text style={{fontWeight:'bold',color:'#E64A19'}}>Status</Text></DataTable.Title>
          </DataTable.Header>
        <View>
          
        </View>
        {summaryLoading ?  
        (<View style={{flex:1,backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
            <ActivityIndicator size="large" color="#ff3d00" />
        </View>):(
        <FlatList
          data={ summary }                               
          renderItem={({item}) => 
          (<DataTable.Row>
            <DataTable.Cell style={{flex:2}}>{item.name}</DataTable.Cell>
            <DataTable.Cell style={{flex:1.5}}>{item.id}</DataTable.Cell>
            <DataTable.Cell >{item.status}</DataTable.Cell>
          </DataTable.Row>)
          }
          keyExtractor={(item, index) => index.toString()}
        />)}
        
        </DataTable>
        </View>
        </View>
        </Overlay>
          
         
          
          <TouchableOpacity style={styles.btn}onPress={() => this.onClick_Monthly()}>
          <Text style={styles.btnText}>MONTHLY SUMMARY</Text>
          </TouchableOpacity>
          {/* <LinearGradient colors={["#ff3d00","#ffccbb"]}  style={{flex:1,borderRadius:20,marginVertical:wp('1%')}}> */}
          <Overlay isVisible={this.state.visible2} onBackdropPress={()=>this.onBack_Monthly()}
            fullScreen={true} 
            backdropStyle={{padding:20}}
            overlayStyle={{width:wp('90%'),height:hp('80%'),borderRadius:30}}>
          <View style={{flex:1}}>
              <Text style={{marginBottom:hp('2%'),fontWeight:'bold',alignSelf:'center'}}>Monthly Attendance Summary:</Text>
          <View style={styles.container1}>
        
          <View style={{ flexDirection: 'row', marginTop: hp('0.5%'), justifyContent: 'flex-start' }}>
            <Text style={[styles.DatePickerText, { marginTop: hp('1.5%') }]}>Start: </Text>
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
              onDateChange={(date) => { startDateChange(date) }}
            />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-start',marginBottom:hp('1%') }}>
            <Text style={[styles.DatePickerText, { marginTop: hp('1.5%') }]}>  End: </Text>
            <DatePicker
              style={styles.DatePicker}
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
                dateText: styles.DateText
                ,
                // ... You can check the source to find the other keys.
              }}
              onDateChange={(date) => { endDateChange(date) }}
            />
          </View>
         {summaryLoading? (<View style={{flex:1, alignItems:'center',justifyContent:'center',backgroundColor:'white'}}>
            <ActivityIndicator size="large" color="#ff3d00"/>
        </View>):( 
        <FlatList                             
              data={ summary }                               
              renderItem={({item}) => <Item employee_id={item.employee_id} employee_name={item.employee_name}  presents={item.presents} absents={item.absents} lates={item.lates}/>}
              keyExtractor={(item, index) => index.toString()}
              /> )}
              
          </View>
          </View>
          </Overlay> 
        </Card>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  summary:state.attendance.summary,
  summaryLoading:state.attendance.summaryLoading
})

export default connect (mapStateToProps,{dailySummary})(HomeScreen);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center' },
  container1: { flex: 1,  backgroundColor: '#fff',paddingBottom:hp('3%')},
  image:{width: wp('80%'), height: hp('40%'), marginRight: wp('4%')},
  cardMainContainer:{width: wp('85%'), backgroundColor: '#fff', borderRadius: 20, elevation: 5, shadowRadius: 20, alignItems: 'center',height:hp('32%')
  },
  heading1:{fontWeight: 'bold', marginTop: hp('2%'),marginBottom:hp('1%'),fontSize: hp('2.5%'), alignSelf: 'center'},
  heading2:{fontWeight: 'bold', marginTop: hp('0.5%')},
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'center',
    backgroundColor: '#E64A19',
    width: wp('60%'),
    height: hp('6%'),
    borderRadius: 12,
    //marginBottom: 10, 
    borderWidth: 1,
    borderColor: '#fff',
    marginVertical:hp('1%')
  },
  btnText:{color: '#fff', fontWeight: 'bold'},
  datePickerView: {
    alignItems: 'center',
  },

  DatePicker: { width: wp('37%')},
  DatePickerText: { color: "#E64A19", fontWeight: 'bold' },
  DatePickerInput: {  height: hp('3%') },
  DatePickerIcon: { top: hp('0%')},
  DatePickerIcon1: { top: hp('0%'),marginRight:wp('3%')},
  DateText: { color: "#E64A19" },
  head: {height: 40, backgroundColor: '#f1f8ff' },
  text: { margin:4,fontSize:12 }
})