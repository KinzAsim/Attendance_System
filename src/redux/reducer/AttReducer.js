const initState = {
    AttLoading:false,
    attendance:[],
    setLoading:false,
    setttings:[],

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
           // console.log('reducer',action.payload)
            return {
                ...state,
                AttLoading: false,
                attendance:action.payload
            }
        case 'GET_EMPLOYEE_SET':
            return {
                ...state,
                setLoading:true

            }
        case 'UPDATE_EMPLOYEE_SET':
            return {
                ...state,
                setLoading:false,
                setLoading:action.payload    
            }
        case 'GET_AUTOMODE':
            return {
              ...state,
              setLoading: true 
            } 
        case 'UPDATE_AUTO_MODE':
           // console.log('reducer',action.payload)
            return {
                ...state,
                setLoading: false,
                setttings:action.payload
            }
        default: 
            return state;   
    }
}
export default AttReducer; 