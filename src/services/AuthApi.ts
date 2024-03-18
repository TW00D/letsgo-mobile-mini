import axios from 'axios';
import { BASE_URL } from './urls';

// 반복되는 코드가 많음?

export const login = (data: any) => {
    axios.post(`${BASE_URL}/auth/login`, data)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error("Error sending data: ", error);
        });
}

export const register = (data: any) => {
    axios.post(`${BASE_URL}/auth/register`, data)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            // if (axios.isAxiosError(error)) {
            //     console.log(error.response?.data)
            // }
            console.error("Error sending data: ", error);
        });
}