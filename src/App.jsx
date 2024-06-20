import ProjectManagementPage from '@/features/project';
import 'overlayscrollbars/styles/overlayscrollbars.css';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import { AuthenticationPage } from './features/auth';
import Board from './features/board/Board';
import { LandingPage } from './features/landingPage';
import Account from './features/setting/component/account-page';
import Appearance from './features/setting/component/appearance-page';
import Notification from './features/setting/component/notification-page';
import Profile from './features/setting/component/profile-page';
import Notfoundpage from './layouts/404-page';
import { AppLayout } from './layouts/app-layout';
import { LandingAuthLayout } from './layouts/landing-auth-layout';
import { SettingLayout } from './layouts/setting-layout';

// Routing from landing page to its child and sign in paage
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<LandingAuthLayout />}>
      {/* Landing page and authentication routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/auth" element={<AuthenticationPage />} />

      <Route path="/user" element={<AppLayout />}>
        {/* Settings routes */}
        <Route path="/user/settings" element={<SettingLayout />}>
          <Route path="" element={<Navigate to="edit-profile" replace />} />
          <Route path="edit-profile" element={<Profile />} />
          <Route path="account" element={<Account />} />
          <Route path="appearance" element={<Appearance />} />
          <Route path="notification" element={<Notification />} />
        </Route>

        {/* Dashboard route */}
        <Route path="/user/dashboard" element={<ProjectManagementPage />} />
        <Route path="*" element={<Notfoundpage />} />
      </Route>

      {/* 404 route */}
      <Route path="*" element={<Notfoundpage />} />
    </Route>
  )
);

function App() {
  // Check if signed in (will be updated using redux)
  const isLogIn = useSelector(state => state.auth.isLogin);

  useEffect(() => {
    if (isLogIn) {
      window.location.replace('/user/dashboard');
    }
  }, [isLogIn]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
