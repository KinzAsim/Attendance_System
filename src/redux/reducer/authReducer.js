
import AsyncStorage from '@react-native-community/async-storage';

const initState = {
    token : null,
    isAuthenticated : null,
    isLoading : false,
    user : null
};

const authReducer = (state = initState, action) => {
    switch(action.type) {
        case 'USER_LOADING' :
            return {
                ...state,
                isLoading : true
            }
        case 'USER_LOADED' :
          
            return {
                ...state,
                isAuthenticated : true,
                isLoading : false,
                user : action.payload
            }
        case 'LOGIN_SUCCESS' :

            AsyncStorage.setItem('userToken', action.payload.token);

            return {
                ...state,
                ...action.payload,
                isAuthenticated : true,
                isLoading : false
            }
            case 'SIGN_OUT':
                console.log('here')
            return {
                ...state,
                token : null,
                isAuthenticated : false,
                isLoading : false,
            }
        default :
            return state;
    }
}

export default authReducer;