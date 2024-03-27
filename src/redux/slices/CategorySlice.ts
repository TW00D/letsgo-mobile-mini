import { PayloadAction, createSlice } from "@reduxjs/toolkit"


interface Category {
    name: string;
    id: number;
}

interface CategoryState {
    category : Category
}

const initialState : CategoryState = {
    category : {name : "패션", id : 1}
}

export const categorySlice = createSlice({
    name : 'category',
    initialState,
    reducers : {
        setCategory : (state, action: PayloadAction<Category>) => {
            state.category = action.payload
        }
    }
})

export const {setCategory} = categorySlice.actions

export default categorySlice.reducer
