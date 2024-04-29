import { configureStore } from "@reduxjs/toolkit";
import ViewTypeSlice, { viewTypeSlice } from "./slices/ViewTypeSlice";
import CommunityTypeSlice from "./slices/CommunityTypeSlice";
import CategorySlice from "./slices/CategorySlice";
import PostLIstSlice from "./slices/PostListSlice";
import ProfileSlice, { profileSlice } from "./slices/ProfileSlice";

export const store = configureStore({
    reducer : {
        viewTypeSlice : ViewTypeSlice,
        categorySlice : CategorySlice,
        communityTypeSlice : CommunityTypeSlice,
        postListSlice : PostLIstSlice,
        profileSlice : ProfileSlice
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch