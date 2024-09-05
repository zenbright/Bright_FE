import { Toaster } from '@/components/ui/toaster';
import React from 'react';
import { Outlet } from 'react-router-dom';

export const LandingAuthLayout = () => {
  return (
    <div>
      <Outlet />
      <Toaster />
    </div>
  );
};
