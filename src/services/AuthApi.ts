import axios from 'axios';
import { BASE_URL } from './urls';
import { Alert } from 'react-native';

// 반복되는 코드가 많음?
// - [ ] 사람들은 어떻게 axios를 사용하는지 확인하기

export function login(data: any, navigation: any) {
    axios.post(`${BASE_URL}/auth/login`, data)
        .then(response => {
            console.log(response.data);
            navigation.navigate('BottomNavigationContainer')
        })
        .catch(error => {
            console.error("Error sending data: ", error);
        });
}

export const register = (data: any, navigation: any) => {
    axios.post(`${BASE_URL}/auth/register`, data)
        .then(response => {
            console.log(response.data);
            navigation.navigate('Login')
        })
        .catch(error => {
            // if (axios.isAxiosError(error)) {
            //     console.log(error.response?.data)
            // }
            console.error("Error sending data: ", error);
        });
}