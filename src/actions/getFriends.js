import axios from 'axios';
import { baseAPI } from '../globals';

export const getFriends = (token) => {
    return (
        axios({
            method : 'get',
            url: baseAPI+'chat',
            headers:{
                Authorization : token
            }}
        )
    );
}