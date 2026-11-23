import { configureStore } from '@reduxjs/toolkit';
import auth from './features/auth/authSlice'
import {api} from "./services/api.ts";
import {listenerMiddleware} from "./middleware/auth.ts";

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        auth,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware).prepend(listenerMiddleware.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;