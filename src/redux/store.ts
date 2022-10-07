import {configureStore} from "@reduxjs/toolkit";
import {githubApi} from "./githubApi";
import {setupListeners} from "@reduxjs/toolkit/query";
import githubSlice from "./githubSlice";

export const store = configureStore({
    reducer: {
        github: githubSlice,
        [githubApi.reducerPath]: githubApi.reducer
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(githubApi.middleware),
})

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;