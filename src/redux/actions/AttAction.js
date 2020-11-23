import axios from 'axios';
import {url} from './types';

export const getEmpList = () => (dispatch,getState) => new Promise(async function (resolve,reject){
  //  console.log('employee')
    dispatch({
        type:'GET_EMPLOYEES'
    })
    const config = {
        headers: {
            'Content-type':'Application/json'
        }
    }
    try{
        const data = await axios.get(`${url}/attendance/employees`,config)
         console.log('data',data.data)

        dispatch({
            type:'UPDATE_EMPLOYEES',
            payload:data.data.data
        })
        resolve('done');
    }
    catch(err){
        console.log(err)
        reject(err);
    }
})

export const getEmpSettings = () => (dispatch,getState) => new Promise(async function (resolve,reject){
    //  console.log('employee')
      dispatch({
          type:'GET_EMPLOYEE_SET'
      })
      const config = {
          headers: {
              'Content-type':'Application/json'
          }
      }
      const body = {
        name,
        emp_id
    };
      try{
          const data = await axios.post(`${url}/attendance/learn`,body,config)
          // console.log('data',data.data)
  
        //   dispatch({
        //       type:'UPDATE_EMPLOYEE_SET',
        //       payload:data.data.data
        //   })
          resolve('done');
      }
      catch(err){
          console.log(err)
          reject(err);
      }
  })

export const autoMode = (checkIn,checkOut) => (dispatch,getState) => new Promise(async function (resolve,reject){

    dispatch({
        type:'GET_AUTOMODE'
    })
    const config = {
        headers : {
            'Content-type':'Application/json'
        }
    }
    const body = {
        checkInThreshold:checkIn,
        checkOutThreshold:checkOut
    };
    try{
        const data = await axios.post(`${url}/attendance/autoMode`,body,config)
      //  console.log('auto',data.data)
        dispatch({
            type:'UPDATE_AUTO_MODE',
            payload:data.data
        })
        resolve('done');
    }
    catch(err){
        reject(err);
    }
})

//attThreshold
export const threshold = (late,absent) => (dispatch,getState) => new Promise(async function (resolve,reject){
     console.log('auto',checkIn,checkOut)
     dispatch({
         type:'GET_AUTOMODE'
     })
     const config = {
         headers : {
             'Content-type':'Application/json'
         }
     }
     const body = {
        lateThreshold:late,
        absentThreshold:absent
     };
     try{
         const data = await axios.post(`${url}/attendance/attThreshold`,body,config)
         //console.log('auto',data.data)
         dispatch({
             type:'UPDATE_AUTO_MODE',
             payload:data.data
         })
         resolve('done');
     }
     catch(err){
         reject(err);
     }
 })