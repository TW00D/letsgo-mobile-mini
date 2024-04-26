import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { PostType } from "../../services/apis/CommunityApi"


type ProfileType = {
    id : number,
    image : string,
    nickname : string,
    username : string
}

interface ProfileState {
    profile : ProfileType
}

const initialState : ProfileState = {
    profile : {
        id : 0,
        image : "",
        nickname : "",
        username : ""
    }
}

export const profileSlice = createSlice({
    name : 'profile',
    initialState,
    reducers : {
        setProfile : (state, action: PayloadAction<ProfileType>) => {
            state.profile = action.payload
        }
    }
})

export const {setProfile} = profileSlice.actions

export default profileSlice.reducer
