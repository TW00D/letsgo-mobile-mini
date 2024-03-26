import axios from 'axios';
import { BASE_URL } from './urls';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import EncryptedStorage from 'react-native-encrypted-storage';

export const login = (data: loginType, navigation: any) => {
    axios.post(`${BASE_URL}/auth/login`, data)
        .then(response => {
            console.log(response.data);
            EncryptedStorage.setItem('accessToken', response.data.data.access_token);
            EncryptedStorage.setItem('refreshToken', response.data.data.refresh_token);

            navigation.navigate('BottomNavigationContainer')
        })
        .catch(error => {
            console.error("Error sending data: ", error.response.data);
            const errorStatus = error.response.status

            if (errorStatus == 400) {
                Alert.alert('아이디나 비밀번호를 다시 확인해주세요')
            } else if (errorStatus == 404) {
                Alert.alert('아이디를 다시 확인해주세요')
            } else {
                Alert.alert('서버 연결이 원활하지 않습니다.')
            }
        });
}

type loginType = {
  username: string,
  password: string,
}

export const register = (data: registerType, navigation: any) => {
    axios.post(`${BASE_URL}/auth/register`, data)
        .then(response => {
            console.log(response.data);
            navigation.navigate('Login' as never)
        })
        .catch(error => {
            console.error("Error sending data: ", error.response.data);

            if (error.response.status == 400) {
                Alert.alert('아이디가 중복되었는지 확인해주세요')
            } else {
                Alert.alert('서버 연결이 원활하지 않습니다.')
            }
        });
}

type registerType = {
  username: string,
  nickname: string,
  password: string,
  image: string
}