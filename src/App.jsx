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
import {LandingAuthLayout} from './layouts/landing-auth-layout';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<LandingAuthLayout />}>
          <Route path="/" element={<LandingPage />} />,
          <Route path="/auth" element={<AuthenticationPage />} />,
        </Route>,
    ),
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
