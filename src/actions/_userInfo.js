import { USER_INFO }from '../types';

export const _userInfo = (id,name,token) => {
    return{
        type:USER_INFO,
        id: id,
        name: name,
        tokne: 'Bearer '+token
    }
}