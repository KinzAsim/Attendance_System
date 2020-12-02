import Pusher from 'pusher-js/react-native';
import React from 'react';
import { View, Platform,StatusBar,Text} from 'react-native';
import {connect} from 'react-redux';



class  NotificationPusher extends React.Component{

    componentDidMount () {
        this.props.navigation.navigate('home');
    }
    render(){
        return(

            <View><Text>Pusher</Text></View>
        );
    }
}
export default NotificationPusher;