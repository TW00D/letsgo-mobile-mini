import axios from "axios";
import { BASE_URL } from "./urls";

export const getCategoryList = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/category`);
        // console.log(response)
        console.log(response.data)
    } catch (error) {
        console.error(error)
    }
}
