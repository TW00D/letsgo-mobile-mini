import { configureStore } from "@reduxjs/toolkit";
import ViewTypeSlice, { viewTypeSlice } from "./slices/ViewTypeSlice";
import CommunityTypeSlice from "./slices/CommunityTypeSlice";
import CategorySlice from "./slices/CategorySlice";

export const store = configureStore({
    reducer : {
        viewTypeSlice : ViewTypeSlice,
        categorySlice : CategorySlice,
        communityTypeSlice : CommunityTypeSlice
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch