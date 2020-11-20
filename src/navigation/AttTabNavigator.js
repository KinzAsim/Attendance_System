/* eslint-disable import/no-unresolved */
import React from 'react';
import { Image, View, StyleSheet, Text } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { colors } from '../style';
import HomeScreen from '../modules/attendenceSystem/Overview/overview';
import LogsScreen from '../modules/attendenceSystem/logs/logs';
import SettingScreen from '../modules/attendenceSystem/settings/settings';
import DetailScreen from '../modules/attendenceSystem/details/details';
// import graphScreen from '../modules/tankMonitorinSystem/charts/graphs';
// import alertScreen from '../modules/tankMonitorinSystem/alerts/recentAlerts';
const iconSetting = require('../../assets/images/tabbar/pages1.png')
const iconHome = require('../../assets/images/tabbar/home2.png');
const iconDetail = require('../../assets/images/tabbar/detail1.png');
const iconGraphs = require('../../assets/images/tabbar/chart1.png');
const iconComponents = require('../../assets/images/tabbar/components.png');
const iconCalendar = require('../../assets/images/tabbar/calender2.png');
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// const hederBackground = require('../../../assets/images/topBarBg.png');

export default createBottomTabNavigator(
  
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Overview',
        headerLeft: null
      },
    }, 
    Employees: {
      screen: LogsScreen,
      navigationOptions: {
        title: 'Employees',
        headerLeft: null
      },
    }, 
    Settings: {
      screen: SettingScreen,
      navigationOptions: {
        title: 'Settings',
        headerLeft: null,      
      },
    }, 
    Details: {
      screen: DetailScreen,
      navigationOptions: {
        title: 'Details',
        headerLeft: null,      
      },
    }, 
    
  },
  
  {
    defaultNavigationOptions: ({ navigation }) => ({
      // eslint-disable-next-line react/prop-types
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconSource;
        switch (routeName) {
          case 'Home':
            iconSource = iconHome;
            break;
          case 'Employees':
            iconSource = iconCalendar;
            break;
          case 'Settings':
            iconSource = iconSetting;
            break;
          case 'Details':
              iconSource = iconDetail;
              break;
          default:
            iconSource = iconComponents;
        }
        return (
          <View style={styles.tabBarItemContainer}>
            <Image
              resizeMode="contain"
              source={iconSource}
              style={[styles.tabBarIcon, focused && styles.tabBarIconFocused]}
            />
          </View>
        );
      },
    }),
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: false,
    tabBarOptions: {
      showLabel: true,
      style: {
        backgroundColor:'#E64A19'
      },
      labelStyle: {
        color: '#fff',
        shadowColor:'#fff',
        fontSize:15
      },
    },
  },
  
);

const styles = StyleSheet.create({
  tabBarItemContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  tabBarIcon: {
    width: 23,
    height: 23,
  },
  tabBarIconFocused: {
    tintColor: '#fff',
  },
  headerContainer: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 10,
  },
  headerImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: 70,
    resizeMode: 'cover',
  },
  headerCaption: {
    //fontFamily: fonts.primaryRegular,
    color: colors.white,
    fontSize: 18,
  },
});

