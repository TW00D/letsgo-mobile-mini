import axios from 'axios';
import { BASE_URL } from './urls';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import EncryptedStorage from 'react-native-encrypted-storage';

export const login = async (data: loginType, navigation: any) => {
    try {
        const response = await axios.post(`${BASE_URL}/auth/login`, data);
        const { access_token, refresh_token } = response.data.data;
        EncryptedStorage.setItem('accessToken', access_token);
        EncryptedStorage.setItem('refreshToken', refresh_token);
        navigation.navigate('BottomNavigationContainer');
    } catch (error) {
        handleApiError(error);
    }
}

export const register = async (data: registerType, navigation: any) => {
    try {
        const response = await axios.post(`${BASE_URL}/auth/register`, data);
        console.log(response.data);
        navigation.navigate('Login' as never)
    } catch (error) {
        handleApiError(error)
    }
}

// TODO : intercepter를 통해 토큰이 없다는 것을 알아내고, 없다면 refresh 함수를 실행시켜, accessToken을 다시 받아온다.
// TODO : 일단 만들어 놓고, 희건이가 서버 연동 시작하면, 그때 테스트하기

export const refresh = async (data: refreshType) => {
    try {
        const response = await axios.post(`${BASE_URL}/auth/token/refresh`, {}, { headers: {Authorization: data.token}});
        const { access_token, refresh_token } = response.data.data;
        EncryptedStorage.setItem('accessToken', access_token);
        EncryptedStorage.setItem('refreshToken', refresh_token);
    } catch (error) {
        // 실패시 에러핸들링
    }
}

const handleApiError = (error: any) => {
    console.error("Error sending data: ", error.response?.data);
    const errorStatus = error.response?.status || 500;

    switch (errorStatus) {
        case 400:
            Alert.alert('아이디나 비밀번호를 다시 확인해주세요');
            break;
        case 404:
            Alert.alert('아이디를 다시 확인해주세요');
            break;
        default:
            Alert.alert('서버 연결이 원활하지 않습니다.');
            break;
    }
}

type loginType = {
  username: string,
  password: string,
}

type registerType = {
  username: string,
  nickname: string,
  password: string,
  image: string
}

type refreshType = {
    token: string
}