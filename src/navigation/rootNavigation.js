import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import home from '../modules/attendenceSystem/Overview/overview';
import login from '../modules/auth/login';
import AttTabNavigator from './AttTabNavigator';
import NotificationPusher from './notificationPusher';
import DetailScreen from '../modules/attendenceSystem/details/customDetail';
import Details from '../navigation/AttTabNavigator';
import AuthLoadingScreen from '../modules/auth/authLoadingScreen';

const Auth_Stack = createStackNavigator({
    auth: {
        screen: login,        
    },   
   
},
{
    defaultNavigationOptions:()=>({
        headerShown:false
    })
});

const App_Stack = createStackNavigator({
    // pusher:{
    //     screen:NotificationPusher
    // },
    home: {
        screen: AttTabNavigator        
    }, 
    detail : {
        screen : DetailScreen
    },
    details : {
        screen : Details
    }
    },
    {
        defaultNavigationOptions: ({navigation}) =>({
         title: 'Attendance System',
    
        headerTitleStyle: {
         color:'#E64A19'
        },
         headerShown:true,
         
         headerBackImage:()=>false,
    
         headerStyle: {
            backgroundColor:'#fff',
        },          
       // headerRight:()=>  <NotificationIcon navigationProps={navigation}/>,
    //headerLeft:()=>  <ProfileIcon navigationProps={navigation}/>               
        }),
    },
    {
        initialRouteName:"home",
    },
);



export default createAppContainer(
    createSwitchNavigator(
        {
        AuthLoading:AuthLoadingScreen,    
        auth:Auth_Stack,   
        App:App_Stack,
        },
        {
            initialRouteName:'auth',
        }
 )
);
