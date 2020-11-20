import { combineReducers } from 'redux';
import AttReducer from './reducer/AttReducer';
import authReducer from './reducer/authReducer';

export default combineReducers({
    auth : authReducer,
    // error: errorReducer,
    attendance:AttReducer
})