import axios from 'axios';
import { BASE_URL } from '../urls';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import EncryptedStorage from 'react-native-encrypted-storage';
import { err } from 'react-native-svg';

export const readUser = async (id: number) => {
    try {
        const token = await EncryptedStorage.getItem('accessToken')
        const response = await axios.get(`${BASE_URL}/user/${id}`, {headers: {Authorization: "Bearer" + token}});
        console.log(response.data);

        return response.data
    } catch (error) {
        handleApiError(error);
    }
}

const handleApiError = (error: any) => {
    console.error("Error sending data: ", error.response.data);
}