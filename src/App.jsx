import 'overlayscrollbars/styles/overlayscrollbars.css';
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Navigate,
} from 'react-router-dom';
import {LandingPage} from './features/landingPage';
import {AuthenticationPage} from './features/auth';
import {LandingAuthLayout} from './layouts/landing-auth-layout';
import {AppLayout} from './layouts/app-layout';
import ProjectManagementPage from '@/features/project';
import {useEffect} from 'react';
import {useState} from 'react';
import {useSelector} from 'react-redux';
import {SettingLayout} from './layouts/setting-layout';
import Profile from './features/setting/component/profile-page';
import Notification from './features/setting/component/notification-page';
import Appearance from './features/setting/component/appearance-page';
import Account from './features/setting/component/account-page';
import Dashboard from './features/dashboard';

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
          <Route path="/notification" element={<Dashboard />} />,
          <Route path="*" element={<h1>404 - Notfound</h1>} />,
        </Route>,
    ),
);


function App() {
  // Check if signed in (will be updated using redux)
  const isLogIn = useSelector((state) => state.auth.isLogin);

  const [currentRouter, setCurerentRouter] = useState(isLogIn ? appRouter : guestRouter);

  useEffect(() => {
    // Choose router with proper layout
    const currentRouter = !isLogIn ? appRouter : guestRouter;

    setCurerentRouter(currentRouter);

    if (isLogIn) {
      window.history.pushState({}, '', '/');
    }
  }, [isLogIn]);

  return (
    <RouterProvider router={currentRouter} />
  );
}

export default App;
