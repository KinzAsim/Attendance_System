import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Button } from 'react-native';
import { Card } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { colors } from '../../../style';
import DateTimePicker from '@react-native-community/datetimepicker';
import { autoMode, threshold, changeMode, getThreshold, Learn} from '../../../redux/actions/AttAction';
import { useDispatch, useSelector } from 'react-redux';

const SettingScreen = () => {
  const [checkIntime, setCheckIntime] = useState(new Date());
  const [checkOutTime, setCheckOutTime] = useState(new Date());
  const [lateThreshold, setLateThreshold] = useState(new Date());
  const [absentThreshold, setAbsentThreshold] = useState(new Date());
  const [mode, setMode] = useState('time');
  const [showOut, setShowOut] = useState(false);
  const [showIn, setShowIn] = useState(false);
  const [ShowAbsent, setShowAbsent] = useState(false);
  const [ShowLate, setShowLate] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const setttings = useSelector((state) => state.attendance.setttings);
  const setLoading = useSelector((state) => state.attendance.setLoading);
  const checkIn_Out = useSelector((state) => state.attendance.checkIn_Out);
  const checkLoading = useSelector((state) => state.attendance.checkLoading);
  const threshold = useSelector((state) => state.attendance.thresholds);
  const thresholdLoading = useSelector((state) => state.attendance.thresholdLoading);
 
  useEffect(() => {
    dispatch(getThreshold());
  }, [])

  const CheckIn = () => {
    openModeInPicker('time');
  };
  const CheckOut = () => {
    showModeOut('time');
  };

  const Late = () => {
    openLateThreshold('time');
  };
  const Absent = () => {
    openAbsentThreshold('time');
  };
  const onChangeIn = (event, selectedTime) => {
    const currentTime = selectedTime || checkIntime;
    setShowIn(Platform.OS === 'ios');
    setCheckIntime(currentTime);
  };
  const onChangeOut = (event, selectedTime) => {
    const currentTime = selectedTime || checkOutTime;
    setShowOut(Platform.OS === 'ios');
    setCheckOutTime(currentTime);
  };
  const onChangeLateThreshold = (event, selectedTime) => {
    const currentTime = selectedTime || lateThreshold;
    setShowLate(Platform.OS === 'ios');
    setLateThreshold(currentTime);
  };
  const onChangeAbsentThreshold = (event, selectedTime) => {
    const currentTime = selectedTime || absentThreshold;
    setShowAbsent(Platform.OS === 'ios');
    setAbsentThreshold(currentTime);
  };
  const openModeInPicker = (currentMode) => {
    setShowIn(true);
    setMode(currentMode);
  };
  const showModeOut = (currentMode) => {
    setShowOut(true);
    setMode(currentMode);
  };
  const openLateThreshold = (currentMode) => {
    setShowLate(true);
    setMode(currentMode);
  };
  const openAbsentThreshold = (currentMode) => {
    setShowAbsent(true);
    setMode(currentMode);
  };

  const handleSubmitAutoMode = () => {
    dispatch(autoMode(checkIntime, checkOutTime));

  }
  const handleSubmitAttThreshold = () => {
    dispatch(threshold(lateThreshold, absentThreshold));

  }
  const handleModeChange = () => {
    if (threshold.check === 1){
      dispatch(changeMode(0));
    }
    else if (threshold.check === 0){
      dispatch(changeMode(1));
    }
  }
const handleLearn = () => {
  dispatch(Learn());
}
  //  render(){
  //    //const{setttings}=this.props;
  return (
    <ScrollView horizontal={true}>
      <Card containerStyle={[styles.cardMainContainer, {
        backgroundColor: '#ff7043', marginTop: hp('5%'), elevation: 10,
        borderRadius: wp('8%')
      }]}
      >
        <Card.Title style={styles.cardTitle}>LEARN: </Card.Title>
        <Card.Divider />
        <TextInput
          style={{
            height: hp('6%'), marginTop: hp('10%'), marginLeft: wp('7%'), borderColor: 'white', borderWidth: 1, justifyContent: 'center', width: wp('60%'),
            backgroundColor: '#fff', borderRadius: 10
          }}
          //onChangeText={text => onChangeText1(text)}
          placeholder='Employee Name*'
          //value={value}
        />

        <TextInput
          style={{
            height: hp('6%'), marginTop: hp('2%'), marginLeft: wp('7%'), borderColor: 'white', borderWidth: 1, justifyContent: 'center', width: wp('60%')
            , borderRadius: 10, backgroundColor: '#fff'
          }}
          //onChangeText={text => onChangeText2(text)}
          placeholder='Employee Id*'
          //value={value}
        />
        {/* </Card>  */}

        {/* <Card.Divider/>  */}
        <TouchableOpacity style={{ marginTop: hp('10%'), width: wp('60%'), height: hp('7%'), backgroundColor: '#fff', borderRadius: 15, marginHorizontal: wp('8%') }}
        onPress={()=>handleLearn()}>
          <Text style={{ marginHorizontal: wp('4%'), marginTop: hp('2%'), color: '#ff3d00', fontSize: 18 }}>
            Change Mode To Learn
                </Text>
        </TouchableOpacity>
      </Card>

      <Card containerStyle={[styles.cardMainContainer, { backgroundColor: '#bf360c', marginTop: hp('5%'), elevation: 30, borderRadius: wp('8%') }]}
      >
        <Card.Title style={styles.cardTitle}> Attendance Thresholds: </Card.Title>
        <Card.Divider />
        <Text style={{ color: '#fff', marginLeft: wp('4%'), marginTop: hp('5%') }}>Time For Late Attendance</Text>

        <TouchableOpacity onPress={Late}>
          <Text style={{ alignSelf: 'flex-end', color: '#fff' }}>Set Time</Text>
        </TouchableOpacity>
        {ShowLate && (
          <DateTimePicker
            testID="dateTimePicker"
            value={lateThreshold}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={(event, value) => onChangeLateThreshold(event, value)}
          />
        )}
        <Text style={{ borderColor: '#fff', marginLeft: wp('5%'), borderBottomWidth: 1, color: '#fff', marginRight: wp('15%') }}>
          {/* {date !== undefined ? 'Time changed event response:\n' : ''} */}
          {lateThreshold !== undefined ? lateThreshold.toTimeString() : ''}
        </Text>

        <Text style={{ color: '#fff', marginLeft: wp('4%'), marginTop: hp('5%') }}>Time For Absense</Text>
        <TouchableOpacity onPress={Absent}>
          <Text style={{ alignSelf: 'flex-end', color: '#fff' }}>Set Time</Text>
        </TouchableOpacity>
        {ShowAbsent && (
          <DateTimePicker
            testID="dateTimePicker"
            value={absentThreshold}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={(event, value) => onChangeAbsentThreshold(event, value)}
          />
        )}
        <Text style={{ borderColor: '#fff', marginLeft: wp('5%'), borderBottomWidth: 1, color: '#fff', marginRight: wp('15%') }}>
          {/* {date !== undefined ? 'Time changed event response:\n' : ''} */}
          {absentThreshold !== undefined ? absentThreshold.toTimeString() : ''}
        </Text>
        <TouchableOpacity style={{ marginTop: hp('10%'), width: wp('50%'), height: hp('7%'), backgroundColor: '#fff', borderRadius: 15, marginLeft: wp('13%') }}
          onPress={() => handleSubmitAttThreshold()}>
          <Text style={{ marginHorizontal: wp('4%'), marginTop: hp('2%'), color: '#ff3d00', fontSize: 18, paddingLeft: wp('9%') }}>
            Submit Times
                </Text>
        </TouchableOpacity>
      </Card>

      <Card containerStyle={[styles.cardMainContainer, { backgroundColor: '#ff3d00', marginTop: hp('5%'), elevation: 30, borderRadius: wp('8%') }]}
      >
        <Card.Title style={styles.cardTitle}> AutoMode Switching: </Card.Title>
        <Card.Divider />
        <Text style={{ color: '#fff', marginLeft: wp('4%'), marginTop: hp('5%') }}>Check In Time Auto Switch</Text>
        <TouchableOpacity onPress={CheckIn}>
          <Text style={{ alignSelf: 'flex-end', color: '#fff' }}>Submit Time</Text>
          {showIn && (
            <DateTimePicker
              testID="dateTimePicker"
              value={checkIntime}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={(event, value) => onChangeIn(event, value)}
            />
          )}
          <Text style={{ borderColor: '#fff', marginLeft: wp('5%'), borderBottomWidth: 1, color: '#fff', marginRight: wp('15%') }}>
            {/* {date !== undefined ? 'Time changed event response:\n' : ''} */}
            {checkIntime !== undefined ? checkIntime.toTimeString() : ''}
          </Text>
        </TouchableOpacity>
        <Text style={{ color: '#fff', marginLeft: wp('4%'), marginTop: hp('5%') }}>Check Out Time Auto Switch</Text>
        <TouchableOpacity onPress={CheckOut}>
          <Text style={{ alignSelf: 'flex-end', color: '#fff' }}>Submit Time</Text>
          {showOut && (
            <DateTimePicker
              testID="dateTimePicker"
              value={checkOutTime}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={(event, value) => onChangeOut(event, value)}
            />
          )}
          <Text style={{ borderColor: '#fff', marginLeft: wp('5%'), borderBottomWidth: 1, color: '#fff', marginRight: wp('15%') }}>
            {/* {date !== undefined ? 'Time changed event response:\n' : ''} */}
            {checkOutTime !== undefined ? checkOutTime.toTimeString() : ''}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginTop: hp('10%'), width: wp('50%'), height: hp('7%'), backgroundColor: '#fff', borderRadius: 15, marginLeft: wp('13%') }} onPress={() => handleSubmitAutoMode()}>
          <Text style={{ marginHorizontal: wp('4%'), marginTop: hp('2%'), color: '#ff3d00', fontSize: 18, paddingLeft: wp('9%') }}>
            Submit Times
                </Text>
        </TouchableOpacity>
      </Card>

      <Card containerStyle={[styles.cardMainContainer, { backgroundColor: '#ff5722', marginTop: hp('5%'), elevation: 30, borderRadius: wp('8%') }]}
      >
        <Card.Title style={styles.cardTitle}>Current Mode: </Card.Title>
        <Card.Divider />
        {threshold.check === 1 ? (<Text style={{ alignSelf: 'center', fontSize: 30, color: '#fff', marginTop: hp('10%') }}>Check In</Text>
        ) : (
            <Text style={{ alignSelf: 'center', fontSize: 30, color: '#fff', marginTop: hp('10%') }}>Check Out</Text>
          )}

        <TouchableOpacity style={{ marginTop: hp('10%'), width: wp('60%'), height: hp('7%'), backgroundColor: '#fff', borderRadius: 15, marginHorizontal: wp('10%') }}
          onPress={() => handleModeChange()}>
            {threshold.check === 1 ? (<Text style={{ marginHorizontal: wp('1%'), marginTop: hp('2%'), color: '#ff3d00', fontSize: 18, paddingLeft: wp('5%') }}>
            Change To Check Out
          </Text>
          ):(
            <Text style={{ marginHorizontal: wp('1%'), marginTop: hp('2%'), color: '#ff3d00', fontSize: 18, paddingLeft: wp('5%') }}>
            Change To Check In
          </Text>
          )}
          
        </TouchableOpacity>
      </Card>
    </ScrollView>

  );
}
// }


export default SettingScreen;

const styles = StyleSheet.create({
  cardTitle: {
    fontSize: 20,
    marginTop: hp('4.0%'),
    color: '#ffff',

  },
  cardMainContainer: {
    width: wp('86%'),
    height: hp('70%'),
    //  marginTop:hp('10%'),
    elevation: 60,
    marginBottom: hp('20%'),
    shadowOpacity: 0.9,
    shadowRadius: wp('3%'),
    borderRadius: wp('8%'),
  },
})