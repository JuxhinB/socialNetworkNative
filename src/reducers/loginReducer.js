import {LOGIN_SET_EMAIL,LOGIN_SET_PASS,LOGIN_SUCCESS,LOGIN_FAIL} from '../types';

INIT_STATE = {
    email:'',
    password:'',
    loading:false,
    error:'',
    user:''
    
};

export default (state = INIT_STATE, action) =>{

    switch (action.type) {
        
        case LOGIN_SET_EMAIL:
            return {...state, email:action.payload};

        case LOGIN_SET_PASS:
            return {...state, password:action.payload};

        case LOGIN_SUCCESS:
            return {...state, loading:false};

        case LOGIN_FAIL:
            return {...state};

        default:
            return(state);
    }

};