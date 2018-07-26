import axios from 'axios';
import { baseAPI } from '../globals';

export const getHomePost = (token) => {
    return (
        axios({
            method : 'get',
            url: baseAPI+'home',
            headers:{
                Authorization : token
            }
        })
    );
}