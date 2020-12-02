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
        // console.log('logs',data.data.data[0])
        let arr =[];
        data.data.data.map((u)=>{
            let obj={
                id: u.emp_id,
                name: u.name

            }
            arr.push(obj);
        });
    // console.log("new",arr);
        dispatch({
            type:'GET_EMPLOYEES',
            payload:arr
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
         
         if(data.data === 'mode changed to learn'){
            dispatch({
                type:'UPDATE_CHECK',
                payload:data.data
            })
        }
        else if(data.data === undefined){
            console.log('Error')
        }
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
export const Attthreshold = (late,absent) => (dispatch,getState) => new Promise(async function (resolve,reject){
    
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
       console.log('attendance',data.data)
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


//  export const updateAttendance = (data)=> (dispatch,getState) => { 
//   // console.log('Level',data)       
//         dispatch ({
//             type:'UPDATE_THRESHOLD',
//             payload:data
//         })
  
 
// }

//check
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

//MacroAttSheet
    export const dailySummary = (type,startTime,endTime) => (dispatch,getState)=> new Promise (async function (resolve,reject){
        dispatch({
           type:'SUMMARY_LOADING' 
        })
        const config = {
            headers: {
                'Content-type':'Application/json'
            }
        }
        let body = null;
        if(type === 'custom'){
             body = {
                type,
                startTime,
                endTime
            }
        }
        else if(type === 'daily'){
             body = {
                type
            }
        }
        
        try{
            const data = await axios.post(`${url}/attendance/macroAttSheet`,body,config)
            console.log('data',data.data.data)
            dispatch({
                type:'GET_SUMMARY',
                payload:data.data.data
            })
            resolve('done');
        }
        catch(err){
            reject(err);
        }
    })

//Detail
    export const allAttendanceDetail = (type,id,startTime,endTime) => (dispatch,getState)=> new Promise (async function (resolve,reject){
        //console.log('done',type,id,startTime,endTime)
        dispatch({
           type:'ATTENDANCE_LOADING' 
        })
        const config = {
            headers: {
                'Content-type':'Application/json'
            }
        }
        let body = null;
        if(type === 'custom'){
             body = {
                type,
                id,
                startTime,
                endTime
              
            }
        }
        else if(type === 'week'){
             body = {
                type,
                id
            }
        }
        try{
            const data = await axios.post(`${url}/attendance/checkAtt`,body,config)
            console.log('action',data.data.data)
           dispatch({
                type:'GET_ATTENDANCE',
                payload:data.data.data
            })      
            resolve('done');
        }
        catch(err){
            reject(err);
        }
    })