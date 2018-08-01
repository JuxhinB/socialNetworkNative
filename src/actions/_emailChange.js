import { LOGIN_SET_EMAIL } from '../types';

export const _emailChange = (email) =>{
    return{
        type:LOGIN_SET_EMAIL,
        payload:email
    }
}