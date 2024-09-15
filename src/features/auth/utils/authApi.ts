import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_BASE_URL } from '../../../config/constants/strings.global';


export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL + 'auth/bright/' }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (body) => ({
                url: 'login',
                method: 'POST',
                body,
            }),
        }),

        signup: builder.mutation({
            query: (body) => ({
                url: 'signup',
                method: 'POST',
                body,
            }),
        }),

        getAccessToken: builder.query({
            query: (refreshToken: String) => `refresh-token/${refreshToken}`,
        }),
    }),
});

export const { useLoginMutation, useSignupMutation, useGetAccessTokenQuery } = authApi;
