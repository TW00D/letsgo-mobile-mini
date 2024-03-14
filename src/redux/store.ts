import { configureStore } from "@reduxjs/toolkit";
import ViewTypeSlice, { viewTypeSlice } from "./slices/ViewTypeSlice";
import ThemeSlice from "./slices/ThemeSlice";
import CommunityTypeSlice from "./slices/CommunityTypeSlice";

export const store = configureStore({
    reducer : {
        viewTypeSlice : ViewTypeSlice,
        themeSlice : ThemeSlice,
        communityTypeSlice : CommunityTypeSlice
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch