import { combineReducers } from 'redux';
import { chatInfoReducer } from './chatInfoReducer';
import { loginReducer } from './loginReducer';
import { userInfoReducer } from './userInfoReducer';

export const _rootReducer = combineReducers({
    login : loginReducer,
    userInfo : userInfoReducer
});