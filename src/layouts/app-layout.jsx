import React from 'react';
import { Outlet } from 'react-router-dom';

import Sidebar from '../components/sidebar';

export const AppLayout = () => {
  return (
    <div className="flex h-dvh">
      <div className="absolute z-40">
        <Sidebar className="absolute z-40" />
      </div>
      <div className='flex ml-[4.9vw] overflow-auto w-full'>
        <Outlet />
      </div>
    </div>
  );
};
