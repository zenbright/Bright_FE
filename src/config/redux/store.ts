import { configureStore } from '@reduxjs/toolkit';

import { authSlice } from '../../features/auth/utils/authSlice';
import { themeSlice } from '../../features/theme/utils/themeSlice';
// import { authApi } from '../../features/auth/utils/authApi';
import { apiSlice } from '../api/apiSlice';
import fileSlice from '@/config/slice/file-slice';
export const store = configureStore({
  reducer: {
    [authSlice.reducerPath]: authSlice.reducer,
    [themeSlice.name]: themeSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    file: fileSlice,
    // [authApi.reducerPath]: authApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    // getDefaultMiddleware().concat(authApi.middleware),
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
