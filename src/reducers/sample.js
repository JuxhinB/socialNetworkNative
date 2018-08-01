export function sample (state = {'login' : false},action) {
    if( action.type == 'AUTHENTICATE' ){
        //return
    }
    return state.login;
    }
