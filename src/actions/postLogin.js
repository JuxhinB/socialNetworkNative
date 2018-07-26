import axios from 'axios';
import { baseAPI } from '../globals';

export const postLogin = (email,password) => {
    return (
        axios.post(
            baseAPI+'login',{email,password}
        )
    );
}