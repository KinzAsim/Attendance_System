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
        //console.log('data',data)
        dispatch({
            type:'UPDATE_EMPLOYEES',
            payload:data.data
        })
        resolve('done');
    }
    catch(err){
        console.log(err)
        reject(err);
    }
})