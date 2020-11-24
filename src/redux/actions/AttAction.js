import axios from 'axios';
import {url} from './types';

export const getEmpList = () => (dispatch,getState) => new Promise(async function (resolve,reject){
  
    dispatch({
        type:'EMPLOYEES_LOADING'
    })
    const config = {
        headers: {
            'Content-type':'Application/json'
        }
    }
    try{
        const data = await axios.get(`${url}/attendance/employees`,config)
        

        dispatch({
            type:'GET_EMPLOYEES',
            payload:data.data.data
        })
        resolve('done');
    }
    catch(err){
        console.log(err)
        reject(err);
    }
})

//learn
export const Learn = (name,emp_id) => (dispatch,getState) => new Promise(async function (resolve,reject){
   
      dispatch({
          type:'LEARN_LOADING'
      })
      const config = {
          headers: {
              'Content-type':'Application/json'
          }
      }
      const body = {
        name:name,
        emp_id:emp_id
    };
      try{
          const data = await axios.post(`${url}/attendance/learn`,body,config)
         
          dispatch({
              type:'UPDATE_LEARN',
              payload:data.data.data
          })
          resolve('done');
      }
      catch(err){
          console.log(err)
          reject(err);
      }
  })
//autoMode
export const autoMode = (checkIn,checkOut) => (dispatch,getState) => new Promise(async function (resolve,reject){

    dispatch({
        type:'EMPLOYEE_SET_LOADING'
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
     
        dispatch({
            type:'GET_EMPLOYEE_SET',
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
    
     dispatch({
         type:'AUTOMODE_LOADING'
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
       
         dispatch({
             type:'GET_AUTO_MODE',
             payload:data.data
         })
         resolve('done');
     }
     catch(err){
         reject(err);
     }
 })


 //checkIn/checkOut
//  export const checkIn_Out = (time) => (dispatch,getState) => new Promise(async function (resolve,reject){
//    // console.log('auto',late,absent)
//     dispatch({
//         type:'GET_CHECK_IN_OUT'
//     })
//     const config = {
//         headers : {
//             'Content-type':'Application/json'
//         }
//     }
//     const body = {
//         time:time,
//         name,
//         emp_id
//     };
//     try{
//         const data = await axios.post(`${url}/attendance/checkin`,body,config)
//        // console.log('auto',data.data)
//         dispatch({
//             type:'UPDATE_CHECK_IN',
//             payload:data.data
//         })
//         resolve('done');
//     }
//     catch(err){
//         reject(err);
//     }
//     try{
//         const data = await axios.post(`${url}/attendance/checkout`,body,config)
//        // console.log('auto',data.data)
//         dispatch({
//             type:'UPDATE_CHECK_OUT',
//             payload:data.data
//         })
//         resolve('done');
//     }
//     catch(err){
//         reject(err);
//     }
// })

    export const changeMode = (check) => (dispatch,getState) => new Promise(async function (resolve,reject){

        dispatch({
            type:'CHECK_LOADING'
        })
        const config = {
            headers : {
                'Content-type':'Application/json'
            }
        }
        const body = {
            check
        };
        try{
            const data = await axios.post(`${url}/attendance/check`,body,config)
            if(data.data === 'mode changed to check in'){
                dispatch({
                    type:'UPDATE_CHECK',
                    payload:1
                })
            }
            else if(data.data === 'mode changed to check out'){
                dispatch({
                    type:'UPDATE_CHECK',
                    payload:0
                })
            }
            
            resolve('done');
        }
        catch(err){
            reject(err);
        }
    })

    //threshold
    export const getThreshold = () => (dispatch,getState) => new Promise(async function (resolve,reject){

        console.log('action')
        dispatch({
            type:'THRESHOLD_LOADING'
        })
        const config = {
            headers : {
                'Content-type':'Application/json'
            }
        }
        try{
            const data = await axios.get(`${url}/attendance/threshold`,config)
            dispatch({
                type:'GET_THRESHOLD',
                payload:data.data
            })
            resolve('done');
        }
        catch(err){
            reject(err);
        }
    })


    export const dailySummary = () => (dispatch,getState)=> new Promise (async function (resolve,reject){
        dispatch({
           type:'SUMMARY_LOADING' 
        })
        const config = {
            headers: {
                'Content-type':'Application/json'
            }
        }
        const body = {
            type: daily,
            startTime,
            endTime
        };
        // try{
        //     const data = await axios.get(`${url}/attendance/macroAttSheet`,config)
        //     dispatch({
        //         type:'GET_SUMMARY',
        //         payload:data.data
        //     })
        //     resolve('done');
        // }
        // catch(err){
        //     reject(err);
        // }
    })