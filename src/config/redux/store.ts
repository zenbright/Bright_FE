import { configureStore } from '@reduxjs/toolkit';

import {authSlice} from '../../features/auth/utils/authSlice';
import {themeSlice} from '../../features/theme/utils/themeSlice';
import { authApi } from '../../features/auth/utils/authApi';

export const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
    [themeSlice.name]: themeSlice.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
