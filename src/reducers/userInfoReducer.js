import { USER_INFO } from '../types';

INIT_STATE = {
    id:'',
    name:'',
    token:''
};

export default (state=INIT_STATE, action)=>{
    
    const { id, name, token } = action.payload;

    switch (action.payload) {
        case USER_INFO:
            return{...state, id:id, name:name, token:token};
        default:
            return{state};
    }
}