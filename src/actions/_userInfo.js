import { USER_INFO }from '../types';

export const _userInfo = (id,name,token) => {
    return{
        type:USER_INFO,
        payload:{
            id,
            name,
            token
        }
    }
}