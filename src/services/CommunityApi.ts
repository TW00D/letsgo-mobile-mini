import axios from "axios";
import { BASE_URL } from "./urls";

export const getCategoryList = async () : Promise<CategoryType[]> => {
    try {
        const response = await axios.get(`${BASE_URL}/category`);
        // console.log(response)
        console.log(response.data.data)

        return response.data.data
    } catch (error) {
        console.error(error)
        return []
    }
}

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

export type CategoryType = {
    created_at : string,
    id : number,
    name : string,
    updated_at : string
}
