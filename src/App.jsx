import React from 'react';
import 'overlayscrollbars/styles/overlayscrollbars.css';
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from 'react-router-dom';

import LandingPage from './features/landingPage';
import {AuthenticationPage} from './features/auth';
import {LandingAuthLayout} from './app/layouts/landing-auth-layout';
import {AppLayout} from './app/layouts/app-layout';
import ProjectManagementPage from '@/features/project';

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
          <Route path="/dashboard" element={<ProjectManagementPage />} />,
          <Route path="*" element={<h1>404 - Notfound</h1>} />,
        </Route>,
    ),
);

function App() {
  // Check if signed in (will be updated using redux)
  const isSignIn = true;

  // Choose router with proper layout
  const currentRouter = isSignIn ? appRouter : guestRouter;

  return (
    <RouterProvider router={currentRouter} />
  );
}

export default App;
