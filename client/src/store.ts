import { configureStore } from '@reduxjs/toolkit';
import auth from './features/auth/authSlice'
import {api} from "./services/api.ts";

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        auth
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;