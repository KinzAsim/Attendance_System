import axios from 'axios';
import {url} from './types';


export const login = (email, password)=> {
    
    return (dispatch, getState)=> {
        dispatch({
            type:'USER_LOADING'
        })

    const config = {
        headers : {
            'Content-type' : 'Application/json' 
        }
    }
    const body = JSON.stringify({
        email,
        password,
    })
    axios.post(`${url}/user/login`, body, config)
    .then(res=>
       
        dispatch ({
            type : 'LOGIN_SUCCESS',
            payload : res.data
    })
    )
    .catch(err => {
         
    });
};
}

export const loadUser = (token) => {       
    return(dispatch,getState)=> {
        dispatch({
            type: 'USER_LOADING',
        });
       
    const config = {
        headers : {
          'Content-type':'Application/json',
          'auth': token
        }
    }
    axios.get(`${url}/user/auth`, config)
    .then(res=>{
      
        dispatch({
            type:'USER_LOADED',
            payload:res.data

        })
    })        
    .catch(err => {
       // console.log(err.response.data);
    })
    }
}


// export const signOut = () => (dispatch,getState) =>{
   
//     dispatch({
//         type:'SIGN_OUT'
//     })
//   }
  