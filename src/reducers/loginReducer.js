import {
    LOGIN_SET_EMAIL,
    LOGIN_SET_PASS,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGIN_PROCCES
} from '../types';

LOGIN = {
    email:'',
    password:'',
    loading:false,
    error:'',
    user:null
};

export default (state = LOGIN, action) =>{

    switch (action.type) {
        
        case LOGIN_SET_EMAIL:
            return {...state, email:action.payload};

        case LOGIN_SET_PASS:
            return {...state, password:action.payload};

        case LOGIN_PROCCES:
            return {...state, loading:true, error:''};

        case LOGIN_SUCCESS:
            return {...state, loading:false, error:'Success', user:action.payload};

        case LOGIN_FAIL:
            return {...state, password:'', loading:false, error:'Log In Failed'};

        default:
            return{state};
    }

};