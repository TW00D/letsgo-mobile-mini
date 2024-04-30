import axios from "axios";
import { BASE_URL } from "../urls";
import EncryptedStorage from 'react-native-encrypted-storage';

export const getTrands = async () => {
  try {
    const response = await axios.get(`http://49.50.175.242:8082/v1/api/rank`);
    console.log(response.data.top_words);
    return response.data.top_words;
  } catch (error) {
    console.error(error);
  }
};
// ''

axios.interceptors.request.use(
    async (config) => {
      try {
        // EncryptedStorage에서 액세스 토큰을 비동기적으로 가져옵니다.
        const accessToken = await EncryptedStorage.getItem("accessToken");
  
        // 토큰이 존재할 경우 요청 헤더에 토큰을 추가합니다.
        if (accessToken) {
          config.headers.Authorization = `Bearer ${accessToken}`;
          // console.log(accessToken)
        }
      } catch (error) {
        console.error("Error fetching access token:", error);
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

export const getCategoryList = async () : Promise<CategoryType[]> => {
    try {
        const response = await axios.get(`${BASE_URL}/category`);
        // console.log(response)
        // console.log(response.data.data)

        return response.data.data
    } catch (error) {
        console.error(error)
        return []
    }
}

export const getPostList = async (category : number) : Promise<PostType[]> => {

    // console.log("token : " + EncryptedStorage.getItem("accessToken"))

    try {

        const params = {
            category : category
        }

        const response = await axios.get(`${BASE_URL}/post`, {params});

        // console.log(response)
        // console.log(response.data.data)

        return response.data.data
    } catch (error) {
        console.error(error)
        return []
    }
}

export const getCommentList = async (postId : number) : Promise<CommentType[]> => {

  // console.log("token : " + EncryptedStorage.getItem("accessToken"))

  try {

      const params = {
          post : postId
      }

      const response = await axios.get(`${BASE_URL}/comment`, {params});

      // console.log(response)
      // console.log(response.data.data)

      return response.data.data
  } catch (error) {
      console.error(error)
      return []
  }
}

export const removePost = async (id : number) => {

  try {
      const response = await axios.delete(`${BASE_URL}/post/${id}`);

      // console.log(response)
      // console.log(response.data.data)

  } catch (error) {
      console.error(error)

  }
}

export const getUserId = async () => {

  try {
      const response = await axios.get(`${BASE_URL}/user/my-info`);

      // console.log(response)
      // console.log(response.data.data)

      return response.data.data


  } catch (error) {
      console.error(error)

  }
}

export const postLike = async (id : number) => {

  try {
      const response = await axios.post(`${BASE_URL}/post/${id}/like`);

      console.log(response)

  } catch (error) {
      console.error(error)

  }
}

export const deleteLike = async (id : number) => {

  try {
      const response = await axios.delete(`${BASE_URL}/post/${id}/like`);

      // console.log(response)

  } catch (error) {
      console.error(error)

  }
}

export const postCommentLike = async (id : number) => {

  try {
      const response = await axios.post(`${BASE_URL}/comment/${id}/like`);

      console.log(response)

  } catch (error) {
      console.error(error)

  }
}

export const deleteCommentLike = async (id : number) => {

  try {
      const response = await axios.delete(`${BASE_URL}/comment/${id}/like`);

      // console.log(response)

  } catch (error) {
      console.error(error)

  }
}

export type CategoryType = {
    created_at : string,
    id : number,
    name : string,
    updated_at : string
}

export type PostType = {
    id : number,
    user : number,
    category : number,
    title: string,
    content: string,
    picture: string,
    viewed: number,
    liked: number,
    commented: number,
    isLike: boolean,
    createdAt: string,
    updatedAt: string
}

export type CommentType = {
    id: number,
    username : string,
    user: number,
    post: number,
    comment: number,
    content: string,
    liked: number,
    commented: number,
    isLike: boolean,
    userImg : string,
    createdAt: string,
    updatedAt: string
}
