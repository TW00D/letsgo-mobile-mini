import axios from "axios";
import { BASE_URL } from "../urls";
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

// export const getCategoryList = async () : Promise<CategoryType[]> => {
//     try {
//         const response = await axios.get(`${BASE_URL}/category`);
//         // console.log(response)
//         // console.log(response.data.data)

//         return response.data.data
//     } catch (error) {
//         console.error(error)
//         return []
//     }
// }

// UI Test Code
export const getCategoryList = async () : Promise<CategoryType[]> => {

    console.log("entered")

    return [
        {created_at: "2024-03-27T02:19:19.557Z", id: 1, name: "패션", updated_at: "2024-03-27T02:19:19.557Z"}, 
        {created_at: "2024-03-27T02:19:25.636Z", id: 2, name: "공부", updated_at: "2024-03-27T02:19:25.636Z"}, 
        {created_at: "2024-03-27T02:19:28.592Z", id: 3, name: "음악", updated_at: "2024-03-27T02:19:28.592Z"}, 
        {created_at: "2024-03-27T02:19:32.901Z", id: 4, name: "애니", updated_at: "2024-03-27T02:19:32.901Z"}, 
        {created_at: "2024-03-27T02:19:35.913Z", id: 5, name: "게임", updated_at: "2024-03-27T02:19:35.913Z"}, 
        {created_at: "2024-03-27T02:19:58.780Z", id: 6, name: "운동", updated_at: "2024-03-27T02:19:58.780Z"}, 
        {created_at: "2024-03-27T02:20:22.453Z", id: 7, name: "사랑", updated_at: "2024-03-27T02:20:22.453Z"}
    ]
}


// export const getPostList = async (category : number) : Promise<PostType[]> => {

//     // console.log("token : " + EncryptedStorage.getItem("accessToken"))

//     try {

//         const params = {
//             category : category
//         }

//         const response = await axios.get(`${BASE_URL}/post`, {params});

//         // console.log(response)
//         // console.log(response.data.data)

//         return response.data.data
//     } catch (error) {
//         console.error(error)
//         return []
//     }
// }

//UI Test Code
export const getPostList = async (category : number) : Promise<PostType[]> => {

  return [
    {
      id: 0,
      user: 2,
      category: 1,
      title: "UI 테스트용 게시물",
      content: "게시게시게시물",
      picture: "https://i.namu.wiki/i/BmLUsKx6ss6BB6C9Gj2XBI9Ot88HjQFVzo8k22OPQaDM9AwllznYcKUu_-c9fpVKgp1NvXWCVQp4TS62jVGxpQ.webp",
      viewed: 5,
      liked: 3,
      commented: 2,
      isLike: true,
      createdAt: "0000-00-00 00:00:00.000",
      updatedAt: "0000-00-00 00:00:00.000"
    },
    {
      id: 1,
      user: 2,
      category: 1,
      title: "UI 테스트용 게시물222",
      content: "게시게시게시물222",
      picture: "https://image-cdn.hypb.st/https%3A%2F%2Fkr.hypebeast.com%2Ffiles%2F2023%2F10%2Fjimmy-butler-miami-heat-2023-1.jpg?cbr=1&q=90",
      viewed: 100,
      liked: 19,
      commented: 11,
      isLike: false,
      createdAt: "0000-00-00 00:00:00.000",
      updatedAt: "0000-00-00 00:00:00.000"
    },
    {
      id: 2,
      user: 2,
      category: 1,
      title: "UI 테스트용 게시물222",
      content: "게시게시게시물222",
      picture: "https://i.namu.wiki/i/BmLUsKx6ss6BB6C9Gj2XBI9Ot88HjQFVzo8k22OPQaDM9AwllznYcKUu_-c9fpVKgp1NvXWCVQp4TS62jVGxpQ.webp",
      viewed: 100,
      liked: 19,
      commented: 11,
      isLike: false,
      createdAt: "0000-00-00 00:00:00.000",
      updatedAt: "0000-00-00 00:00:00.000"
    },
    {
      id: 3,
      user: 2,
      category: 1,
      title: "UI 테스트용 게시물222",
      content: "게시게시게시물222",
      picture: "https://img.seoul.co.kr/img/upload/2016/01/04/SSI_20160104165944_O2.jpg",
      viewed: 100,
      liked: 19,
      commented: 11,
      isLike: false,
      createdAt: "0000-00-00 00:00:00.000",
      updatedAt: "0000-00-00 00:00:00.000"
    },
  ]
}


// export const getCommentList = async (postId : number) : Promise<CommentType[]> => {

//   // console.log("token : " + EncryptedStorage.getItem("accessToken"))

//   try {

//       const params = {
//           post : postId
//       }

//       const response = await axios.get(`${BASE_URL}/comment`, {params});

//       // console.log(response)
//       // console.log(response.data.data)

//       return response.data.data
//   } catch (error) {
//       console.error(error)
//       return []
//   }
// }

// Ui Text Code
export const getCommentList = async (postId : number) : Promise<CommentType[]> => {

  // console.log("token : " + EncryptedStorage.getItem("accessToken"))
    return [
        {
          id: 0,
          user: 3,
          post: 1,
          comment: 0,
          content: "This is Test Comment",
          liked: 1,
          commented: 0,
          isLike: false,
          createdAt: "2024-03-27T02:19:19.557Z",
          updatedAt: "0000-00-00 00:00:00.000"
        },
        {
          id: 1,
          user: 4,
          post: 0,
          comment: 0,
          content: "와 개쩐다",
          liked: 6,
          commented: 0,
          isLike: true,
          createdAt: "2024-03-28T02:19:19.557Z", // 한국 11시
          updatedAt: "0000-00-00 00:00:00.000"
        },
        {
          id: 2,
          user: 5,
          post: 0,
          comment: 0,
          content: "이... 이게 뭐누",
          liked: 12,
          commented: 0,
          isLike: false,
          createdAt: "2023-03-30T03:02:58.557Z",
          updatedAt: "0000-00-00 00:00:00.000"
        },
    ]

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
    user: number,
    post: number,
    comment: number,
    content: string,
    liked: number,
    commented: number,
    isLike: boolean,
    createdAt: string,
    updatedAt: string
}
