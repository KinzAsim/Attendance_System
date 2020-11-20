const initState = {
    AttLoading:false,
    attendance:[],
};

const AttReducer = (state = initState, action) => {
    let index=-1;
    
    switch(action.type){
        case 'GET_EMPLOYEES':
            return {
              ...state,
              AttLoading: true
            } 
        case 'UPDATE_EMPLOYEES':
            return {
                ...state,
                AttLoading: false,
                attendance:action.payload
            }
        case 'GET_EMPLOYEES':
            return {
                ...state,

            }
        case 'UPDATE_EMPLOYEES':
            return {
                ...state,
                    
            }
        default: 
            return state;   
    }
}
export default AttReducer; 