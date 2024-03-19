import axios from 'axios';
import { BASE_URL } from './urls';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// 반복되는 코드가 많음?
// - [ ] 사람들은 어떻게 axios를 사용하는지 확인하기


export const login = (data: any, navigation: any) => {
    axios.post(`${BASE_URL}/auth/login`, data)
        .then(response => {
            console.log(response.data);
            navigation.navigate('BottomNavigationContainer')
        })
        .catch(error => {
            console.error("Error sending data: ", error);

            if (error.response.status == 400) {
                Alert.alert('아이디나 비밀번호를 다시 확인해주세요')
            } else {
                Alert.alert('서버 연결이 원활하지 않습니다.')
            }
        });
}

export const register = (data: any, navigation: any) => {
    axios.post(`${BASE_URL}/auth/register`, data)
        .then(response => {
            console.log(response.data);
            navigation.navigate('Login' as never)
        })
        .catch(error => {
            console.error("Error sending data: ", error);

            if (error.response.status == 400) {
                Alert.alert('아이디가 중복되었는지 확인해주세요')
            } else {
                Alert.alert('서버 연결이 원활하지 않습니다.')
            }
        });
}
