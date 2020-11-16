/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
//import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import {TableView} from "react-native-responsive-table"
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Navigation from './src/navigation/rootNavigation';


class App extends React.Component{
 
  render(){
    const state = this.state;
    return(
      <Navigation/>
      
//       <TableView 
//     headers={[
//         {
//             name:"Name",
//             reference_key:"name",
//         },
//         {
//             name:"Id",
//             reference_key:"id",
//         },
//         {
//             name:"Status",
//             reference_key:"status",
//         },]}
//     rows={[
//             {
//                 no:1,
//                 name:"Kinza",
//                 id:1,
//                 status:21
//             },
//             {
//                 no:2,
//                 name:"Umair",
//                 id:2,
//                 status:22
//             },
//             {
//               no:3,
//               name:"Hamza",
//               id:3,
//               status:23
//             },
//             {
//               no:4,
//               name:"Amna",
//               id:4,
//               status:24
//             },
//             {
//               no:5,
//               name:"Mubashir",
//               id:5,
//               status:25
//             },
//         ]}
// />
    );
  }
}
export default App;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 }
});