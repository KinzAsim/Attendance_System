

const initState = {
    employeesLoading:false,
    employees:[],
    setLoading:false,
    setttings:[],
    checkIn_Out:false,
    checkLoading:[],
    thresholds:[],
    thresholdLoading:false,
    summary:[],
    summaryLoading:false

};

const AttReducer = (state = initState, action) => {
    let index=-1;
    
    switch(action.type){
        case 'EMPLOYEES_LOADING':
            return {
              ...state,
              employeesLoading: true 
            } 
        case 'GET_EMPLOYEES':
           
            return {
                ...state,
                employeesLoading: false,
                employees:action.payload
            }
        case 'EMPLOYEE_SET_LOADING':
            return {
                ...state,
                setLoading:true

            }
        case 'GET_EMPLOYEE_SET':
            return {
                ...state,
                setLoading:false,
                setLoading:action.payload    
            }
        case 'AUTOMODE_LOADING':
            return {
              ...state,
              setLoading: true 
            } 
        case 'GET_AUTO_MODE':
          
            return {
                ...state,
                setLoading: false,
                setttings:action.payload
            }
        case 'CHECK_LOADING':
            return {
              ...state,
              checkLoading: true 
            } 
        case 'UPDATE_CHECK':
            return {
                ...state,
                thresholds:
                {
                    check:action.payload
                }
            }
        case 'THRESHOLD_LOADING':
            return {
                ...state,
                thresholdLoading: true

            }
        case 'GET_THRESHOLD':
            return {
                ...state,
                thresholdLoading: false,
                thresholds:action.payload
            }
        case 'SUMMARY_LOADING':
            return {
                ...state,
                summaryLoading:action.payload
            }
        default: 
            return state;   
    }
}
export default AttReducer; 