import { configureStore } from '@reduxjs/toolkit';

import authReducer from '../../features/auth/utils/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
