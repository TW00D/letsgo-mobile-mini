import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { PostType } from "../../services/CommunityApi"




interface PostListState {
    postList : PostType[]
}

const initialState : PostListState = {
    postList : []
}

export const postListSlice = createSlice({
    name : 'postList',
    initialState,
    reducers : {
        setPostList : (state, action: PayloadAction<PostType[]>) => {
            state.postList = action.payload
        }
    }
})

export const {setPostList} = postListSlice.actions

export default postListSlice.reducer
