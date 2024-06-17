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
import Appearance from './features/setting/component/appearance-page';
import Account from './features/setting/component/account-page';

// Routing from landing page to its child and sign in paage
const guestRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<LandingAuthLayout />}>
          <Route path="/" element={<LandingPage />} />,
          <Route path="/auth" element={<AuthenticationPage />} />,
        </Route>,
    ),
);

// Routing from within the application
const appRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<AppLayout />}>
          <Route path="" element={<Navigate to="dashboard" replace/>} />
          <Route path="/settings" element={<SettingLayout/>}>
            <Route path="" element={<Navigate to="edit-profile" replace/>} />
            <Route path='edit-profile' element={<Profile/>}/>
            <Route path='account' element={<Account/>}/>
            <Route path='appearance' element={<Appearance/>}/>
            <Route path='notification' element={<Notification/>}/>
          </Route>,
          <Route path="/dashboard" element={<ProjectManagementPage />} />,
          <Route path="*" element={<h1>404 - Notfound</h1>} />,
        </Route>,
    ),
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
    // <Notfoundpage/>
  );
}

export default App;
