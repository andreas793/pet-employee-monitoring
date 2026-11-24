import { createApi, fetchBaseQuery,retry } from "@reduxjs/toolkit/query/react";
import type {RootState} from "../store.ts";


const baseQuery = fetchBaseQuery({
    baseUrl: '/api',
    prepareHeaders(headers, {getState}) {
        const token = (getState() as RootState).auth.user?.token ||
        localStorage.getItem('token');

        if(token && token!== null){
            headers.set('authorization', `Bearer ${token}`);
        }
    }
})

const baseQueryWithRetry = retry(baseQuery, {maxRetries: 1});

export const api = createApi({
    reducerPath: 'splitApi',
    baseQuery: baseQueryWithRetry,
    refetchOnMountOrArgChange: true,
    endpoints: () => ({}),
})