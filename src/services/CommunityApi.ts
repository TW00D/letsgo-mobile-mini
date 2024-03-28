import axios from "axios";
import { BASE_URL } from "./urls";
import EncryptedStorage from 'react-native-encrypted-storage';


axios.interceptors.request.use(
    async (config) => {
      try {
        // EncryptedStorage에서 액세스 토큰을 비동기적으로 가져옵니다.
        const accessToken = await EncryptedStorage.getItem("accessToken");
  
        // 토큰이 존재할 경우 요청 헤더에 토큰을 추가합니다.
        if (accessToken) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        //   console.log(accessToken)
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

// UI Test Code
// export const getCategoryList = async () : Promise<CategoryType[]> => {

//     console.log("entered")

//     return [
//         {created_at: "2024-03-27T02:19:19.557Z", id: 1, name: "패션", updated_at: "2024-03-27T02:19:19.557Z"}, 
//         {created_at: "2024-03-27T02:19:25.636Z", id: 2, name: "공부", updated_at: "2024-03-27T02:19:25.636Z"}, 
//         {created_at: "2024-03-27T02:19:28.592Z", id: 3, name: "음악", updated_at: "2024-03-27T02:19:28.592Z"}, 
//         {created_at: "2024-03-27T02:19:32.901Z", id: 4, name: "애니", updated_at: "2024-03-27T02:19:32.901Z"}, 
//         {created_at: "2024-03-27T02:19:35.913Z", id: 5, name: "게임", updated_at: "2024-03-27T02:19:35.913Z"}, 
//         {created_at: "2024-03-27T02:19:58.780Z", id: 6, name: "운동", updated_at: "2024-03-27T02:19:58.780Z"}, 
//         {created_at: "2024-03-27T02:20:22.453Z", id: 7, name: "사랑", updated_at: "2024-03-27T02:20:22.453Z"}
//     ]
// }


export const getPostList = async (category : number) : Promise<PostType[]> => {

    console.log("token : " + EncryptedStorage.getItem("accessToken"))

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
