import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface ViewTypeState {
    viewType : string
}

const initialState : ViewTypeState = {
    viewType : "popularity"
}

export const viewTypeSlice = createSlice({
    name : 'viewType',
    initialState,
    reducers : {
        setViewType : (state, action: PayloadAction<string>) => {
            state.viewType = action.payload
        }
    }
})

export const {setViewType} = viewTypeSlice.actions

export default viewTypeSlice.reducer
