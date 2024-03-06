import 'overlayscrollbars/styles/overlayscrollbars.css';
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from 'react-router-dom';
import {LandingPage} from './features/landingPage';
import {AuthenticationPage} from './features/auth';
import {LandingAuthLayout} from './layouts/landing-auth-layout';
import {AppLayout} from './layouts/app-layout';
import ProjectManagementPage from '@/features/project';
import {useEffect} from 'react';
import {useState} from 'react';
import {useSelector} from 'react-redux';
import SettingPage from './features/setting/component/page';

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
          <Route path="/settings" element={<SettingPage />} />,
          <Route path="/dashboard" element={<ProjectManagementPage />} />,
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
    const currentRouter = isLogIn ? appRouter : guestRouter;

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
