import 'overlayscrollbars/styles/overlayscrollbars.css';
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Navigate,
} from 'react-router-dom';
import { LandingPage } from './features/landingPage';
import { AuthenticationPage } from './features/auth';
import { LandingAuthLayout } from './layouts/landing-auth-layout';
import { AppLayout } from './layouts/app-layout';
import ProjectManagementPage from '@/features/project';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { SettingLayout } from './layouts/setting-layout';
import Profile from './features/setting/component/profile-page';
import Notification from './features/setting/component/notification-page';
import Appearance from './features/setting/component/appearance-page';
import Account from './features/setting/component/account-page';
import Board from './features/board/Board';

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
        <Route path="*" element={<h1>404 - Notfound</h1>} />
      </Route>

      {/* 404 route */}
      <Route path="*" element={<h1>404 - Notfound</h1>} />
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
    // <Board />
  );
}

export default App;
