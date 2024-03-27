import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface CategoryState {
    category : string
}

const initialState : CategoryState = {
    category : "fashion"
}

export const categorySlice = createSlice({
    name : 'category',
    initialState,
    reducers : {
        setCategory : (state, action: PayloadAction<string>) => {
            state.category = action.payload
        }
    }
})

export const {setCategory} = categorySlice.actions

export default categorySlice.reducer
