import React from 'react';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
//import {TableView} from "react-native-responsive-table"
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
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
  FlatList
} from 'react-native';
import DatePicker from 'react-native-datepicker';
import { Card, ListItem, Button, Icon, Overlay } from 'react-native-elements'
import {connect} from 'react-redux';
import {dailySummary} from '../../../redux/actions/AttAction';
import {DataTable,ViewStyle} from 'react-native-paper';

const background = require("../../../../assets/images/A.logo.png")

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible1: false,
      visible2:false,
      tableHead: ['Name', 'Id', 'Status'],
      tableData: [
        ['Kinza Asim', '2', '3'],
        ['Umair Yaqub', 'b', 'c'],
        ['Hamza Munir', '2', '3'],
        ['Hamza Saleem', 'z', 'c'],
        ['Mubassir', 'o', 'e'],
        ['Amna Malik', 'b', 'c'],
        ['Mahnoor', 'w', 'h'],
        ['Kinza Asim', '2', '3'],
        ['Umair Yaqub', 'b', 'c'],
        ['Hamza Munir', '2', '3'],
        ['Hamza Saleem', 'z', 'c'],
        ['Mubassir', 'o', 'e'],
        ['Amna Malik', 'b', 'c'],
        ['Mahnoor', 'w', 'h'],
        ['Kinza Asim', '2', '3'],
        ['Umair Yaqub', 'b', 'c'],
        ['Hamza Munir', '2', '3'],
        ['Hamza Saleem', 'z', 'c'],
        ['Mubassir', 'o', 'e'],
        ['Amna Malik', 'b', 'c'],
        ['Mahnoor', 'w', 'h'],
        ['Kinza Asim', '2', '3'],
        ['Umair Yaqub', 'b', 'c'],
        ['Hamza Munir', '2', '3'],
        ['Hamza Saleem', 'z', 'c'],
        ['Mubassir', 'o', 'e'],
        ['Amna Malik', 'b', 'c'],
        ['Mahnoor', 'w', 'h'],
        ['Kinza Asim', '2', '3'],
        ['Umair Yaqub', 'b', 'c'],
        ['Hamza Munir', '2', '3'],
        ['Hamza Saleem', 'z', 'c'],
        ['Mubassir', 'o', 'e'],
        ['Amna Malik', 'b', 'c'],
        ['Mahnoor', 'w', 'h']
      ]
    }
  }

  onClick_Daily = () => {
    this.setState({
      visible1:true
    })
   this.props.dailySummary('daily');
  }
  onClick_Monthly = () => {
    this.setState({
      visible2:true
    })
    this.props.dailySummary('monthly');
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
    const {summary,summaryLoading}= this.props;
    //console.log('render',summary)


    return (
      <View style={styles.container}>
        <Image source={background} style={styles.image}></Image>
        <Card containerStyle={styles.cardMainContainer}>
          <Text style={styles.heading1}>Summary</Text>
          <TouchableOpacity style={[styles.btn, { marginTop: hp('3%') }]} onPress={() => this.onClick_Daily()}>
          <Overlay isVisible={this.state.visible1} onBackdropPress={()=>this.onBack_Daily()}
            fullScreen={true} 
            // backdropStyle={{padding:20}}
            overlayStyle={{width:wp('90%'),height:hp('80%'),borderRadius:30,paddingBottom:hp('5%')}}>
          <View style={{flex:1}}>
          <Text style={{marginBottom:hp('1%'),fontWeight:'bold'}}>Daily Attendance Summary:</Text>
        <View style={styles.container1}>
        <DataTable>
          <DataTable.Header>
          <DataTable.Title>Name</DataTable.Title>
          <DataTable.Title>ID</DataTable.Title>
          <DataTable.Title>Status</DataTable.Title>
          </DataTable.Header>

        <FlatList
          data={ summary }                               
          renderItem={({item}) => 
          (<DataTable.Row>
            <DataTable.Cell>{item.name}</DataTable.Cell>
            <DataTable.Cell>{item.id}</DataTable.Cell>
            <DataTable.Cell>{item.status}</DataTable.Cell>
          </DataTable.Row>)
          }
          keyExtractor={(item, index) => index.toString()}
        />
        </DataTable>
          </View>
          </View>
          </Overlay>
          <Text style={styles.btnText}>DAILY SUMMARY</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.btn}onPress={() => this.onClick_Monthly()}>
          <Overlay isVisible={this.state.visible2} onBackdropPress={()=>this.onBack_Monthly()}
            fullScreen={true} 
            // backdropStyle={{padding:20}}
            overlayStyle={{width:wp('90%'),height:hp('80%'),borderRadius:30}}>
              <View style={{flex:1}}>
              <Text style={{marginBottom:hp('2%'),fontWeight:'bold'}}>Monthly Attendance Summary:</Text>
              <View style={styles.container1}>
        <DataTable >
          <DataTable.Header>
          <DataTable.Title>ID</DataTable.Title>
          <DataTable.Title>Name</DataTable.Title>
          <DataTable.Title>Presents</DataTable.Title>
          <DataTable.Title>Absents</DataTable.Title>
          <DataTable.Title>Lates</DataTable.Title>
          </DataTable.Header>

        <FlatList
          data={ summary }                               
          renderItem={({item}) =>  
          (<DataTable.Row >
            <DataTable.Cell >{item.id}</DataTable.Cell>
            <DataTable.Cell >{item.name}</DataTable.Cell>
            <DataTable.Cell >28</DataTable.Cell>
            <DataTable.Cell >29</DataTable.Cell>
            <DataTable.Cell >30</DataTable.Cell>
          </DataTable.Row>)
          }
          keyExtractor={(item, index) => index.toString()}
        />
        </DataTable>
          </View>
            </View>
            </Overlay>
            <Text style={styles.btnText}>MONTHLY SUMMARY</Text>
          </TouchableOpacity>

          <Text style={styles.heading2}>Custom :</Text>

          <View style={{ flexDirection: 'row', marginTop: hp('0.5%'), justifyContent: 'center' }}>
            <Text style={[styles.DatePickerText, { marginTop: hp('1.5%') }]}>Start: </Text>
            <DatePicker
              style={styles.DatePicker}
              // date={StartDate}
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
          <View style={{ flexDirection: 'row', marginTop: hp('1%'), justifyContent: 'center' }}>
            <Text style={[styles.DatePickerText, { marginTop: hp('1.5%') }]}>  End: </Text>
            <DatePicker
              style={styles.DatePicker}
              // date={EndDate}
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
                ,
                // ... You can check the source to find the other keys.
              }}
              onDateChange={(date) => { endDateChange(date) }}
            />
          </View>
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
  container1: { flex: 1,  paddingTop: 20, backgroundColor: '#fff',paddingBottom:hp('3%'),flexDirection:'row'},
  image:{width: wp('80%'), height: hp('30%'), marginRight: wp('4%')},
  cardMainContainer:{width: wp('85%'), backgroundColor: '#fff', borderRadius: 20, elevation: 5, shadowRadius: 20, alignItems: 'center',height:hp('45%')
  },
  heading1:{fontWeight: 'bold', marginBottom: hp('1%'), fontSize: hp('2.5%'), alignSelf: 'center'},
  heading2:{fontWeight: 'bold', marginTop: hp('0.5%')},
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E64A19',
    width: wp('60%'),
    height: hp('6%'),
    borderRadius: 12,
    //marginBottom: 10, 
    borderWidth: 1,
    borderColor: '#fff',
    marginVertical: hp('1%')
  },
  btnText:{color: '#fff', fontWeight: 'bold'},
  datePickerView: {
    alignItems: 'center',
    flexDirection: 'row',
  },

  DatePicker: { width: wp('37%'), marginLeft: wp('1%') },
  DatePickerText: { marginLeft: wp('3%'), color: "#E64A19", fontWeight: 'bold' },
  DatePickerInput: { marginLeft: wp('0%'), height: hp('3%') },
  DatePickerIcon: { top: hp('0%'), marginLeft: wp('0%') },
  DateText: { color: "#800080" },
  head: {height: 40, backgroundColor: '#f1f8ff' },
  text: { margin:4,fontSize:12 }
})