import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import home from '../modules/attendenceSystem/Overview/overview';
import login from '../modules/auth/login';
import AttTabNavigator from './AttTabNavigator';


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
    home: {
        screen: AttTabNavigator        
    }, 
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
        auth:Auth_Stack,   
        App:App_Stack,
        },
        {
            initialRouteName:'auth',
        }
 )
);
