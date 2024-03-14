import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface ThemeState {
    theme : string
}

const initialState : ThemeState = {
    theme : "fashion"
}

export const themeSlice = createSlice({
    name : 'theme',
    initialState,
    reducers : {
        setTheme : (state, action: PayloadAction<string>) => {
            state.theme = action.payload
        }
    }
})

export const {setTheme} = themeSlice.actions

export default themeSlice.reducer
