import axios from 'axios';
import { BASE_URL } from './urls';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import EncryptedStorage from 'react-native-encrypted-storage';
import { err } from 'react-native-svg';

export const createPost = async (data: createPostType) => {
    try {
        const token = await EncryptedStorage.getItem('accessToken')
        const response = await axios.post(`${BASE_URL}/post`, data, {headers: {Authorization: "Bearer" + token}});
        console.log(response.data);
    } catch (error) {
        handleApiError(error);
    }
}

const handleApiError = (error: any) => {
    console.error("Error sending data: ", error.response.data);
}

interface createPostType {
  category: number,
  title: string,
  content: string,
  picture: string
}