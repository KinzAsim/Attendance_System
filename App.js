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
    );
  }
}
export default App;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 }
});