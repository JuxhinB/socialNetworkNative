import { USER_INFO } from '../types';

USER = {
    id:'',
    name:'',
    token:''
};

export default (state=USER, action)=>{

    switch (action.payload) {
        case USER_INFO:
            return{...state, id:action.id, name:action.name, token:action.token};
        default:
            return{state};
    }
}