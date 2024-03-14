import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface CommunityTypeState {
    communityType : string
}

const initialState : CommunityTypeState = {
    communityType : "Total"
}

export const communityTypeSlice = createSlice({
    name : 'communityType',
    initialState,
    reducers : {
        setCommunityType : (state, action: PayloadAction<string>) => {
            state.communityType = action.payload
        }
    }
})

export const {setCommunityType} = communityTypeSlice.actions

export default communityTypeSlice.reducer