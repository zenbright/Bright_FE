import { configureStore } from '@reduxjs/toolkit';

import authReducer from '../../features/auth/utils/authSlice';
import appThemeReducer from '../../features/theme/utils/themeSlice';

export const store = configureStore({
  reducer: {
    userLoginStatus: authReducer,
    currentTheme: appThemeReducer,
  },
});
