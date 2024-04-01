import axios from 'axios';
import { BASE_URL } from './urls';
import EncryptedStorage from 'react-native-encrypted-storage';

export const createComment = async (data: createPostType) => {
    try {
        const token = await EncryptedStorage.getItem('accessToken')
        const response = await axios.post(`${BASE_URL}/comment`, data, {headers: {Authorization: "Bearer" + token}});
        console.log(response.data);
    } catch (error) {
        handleApiError(error);
    }
}

const handleApiError = (error: any) => {
    console.error("Error sending data: ", error.response.data);
}

interface createPostType {
  post: number,
  comment: number,
  content: string,
}