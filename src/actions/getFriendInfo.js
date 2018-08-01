import axios from 'axios';
import { baseAPI } from '../globals';

export const getFriendInfo = (friend_id,token) => {
    return(
        axios({
            method : 'get',
            url: baseAPI+'friend/'+friend_id,
            headers:{
                Authorization : token
            }}
        )
    );
}