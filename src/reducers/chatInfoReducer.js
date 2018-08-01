export function chatInfoReducer (state = {'login' : false},action) {
    if( action.type == 'SET_CHAT_INFO' ){
        //return
    }
    return state.login;
}