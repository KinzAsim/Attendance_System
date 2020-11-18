import React from 'react';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
//import {TableView} from "react-native-responsive-table"
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  ViewBase,
} from 'react-native';

class HomeScreen extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
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
    console.log('Daily')
  }
  static navigationOption = {
    title:'Overview'
  }
  render(){
    const state = this.state;

    return(
      <View style={{flex:1, marginBottom:hp('2%')}}> 
      <View style={{flexDirection:'row',marginHorizontal:wp('9%')}}>
      <TouchableOpacity style={styles.btn} onPress={()=>this.onClick_Daily()}>
        <Text style={{color:'#fff'}}>DAILY SUMMARY</Text>
        </TouchableOpacity> 
        <TouchableOpacity style={styles.btn} >
        <Text style={{color:'#fff'}}>MONTHLY SUMMARY</Text>
        </TouchableOpacity> 
      </View>
      
      <ScrollView style={styles.container}>
      <Table borderStyle={{borderWidth: 2, borderColor: '#f1f8ff'}}>
        <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
        <Rows data={state.tableData} textStyle={styles.text}/>
      </Table>
    </ScrollView>
    <View style={{flexDirection:'row',marginTop:hp('2%')}}>
    <Text style={{marginHorizontal:wp('7%'),fontSize:17}}>Total Absent:4</Text>
    <Text style={{marginHorizontal:wp('7%'),fontSize:17}}>Total Present:8</Text>
    <Text style={{marginHorizontal:wp('7%'),fontSize:17}}>Total Late:3</Text>
    </View>
      </View>
      
    );
  }
}
export default HomeScreen;

const styles = StyleSheet.create({
  container: {  padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 },
  btn :{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#E64A19',
    width: wp('40%'),
    height: hp('6%'),
    borderRadius: 30,
    marginBottom: 10,
    marginTop: hp('5%'),
    borderWidth: 1,
    borderColor: '#fff'
  },
})