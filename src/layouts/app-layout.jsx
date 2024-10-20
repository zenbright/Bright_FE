import React from 'react';
import { Outlet } from 'react-router-dom';

import Sidebar from '../components/sidebar';

export const AppLayout = () => {
  return (
    <div className="flex h-dvh">
      <div className="absolute z-10">
        <Sidebar className="relative z-10" />
      </div>
      <div className="z-0 ml-[5.5vw] flex w-full overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};
