import { LOGIN_SET_PASS } from '../types';
export const _passwordChange = (password) =>{
    return{
        type:LOGIN_SET_PASS,
        payload:password
    }
}