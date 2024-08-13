import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_BASE_URL } from '../../../config/constants/strings.global';


export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL + 'auth/' }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (body) => ({
                url: 'login',
                method: 'POST',
                body,
            }),
        }),

        register: builder.mutation({
            query: (body) => ({
                url: 'register',
                method: 'POST',
                body,
            }),
        }),

        getAccessToken: builder.query({
            query: (refreshToken: String) => `refresh-token/${refreshToken}`,
        }),
    }),
});

export const { useLoginMutation, useRegisterMutation, useGetAccessTokenQuery } = authApi;
