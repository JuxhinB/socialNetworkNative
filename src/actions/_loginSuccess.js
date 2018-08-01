import { 
    LOGIN_SUCCESS, 
    LOGIN_PROCCES, 
    LOGIN_FAIL, 
    USER_INFO 
}from '../types';
import { postLogin } from '../actions/postLogin';

export const _loginSuccess = (email,password) =>{

    return (dispatch) => {

        dispatch({type:LOGIN_PROCCES});

        postLogin(email,password).then(
            result=>{
                const id = result.data.id;
                const name = result.data.name;
                const token = result.data.token;
                
                dispatch(
                    {
                        type:USER_INFO,
                        id: id,
                        name : name,
                        tokee: 'Bearer '+token
                    }
                );
                dispatch({type:LOGIN_SUCCESS});
            }
        ).catch(
            error=>{
                if(error)
                dispatch({type:LOGIN_FAIL});
            }
        );
    }
}