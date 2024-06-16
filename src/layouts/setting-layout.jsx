import React from 'react';
import { Outlet } from 'react-router-dom';

import SettingSideBar from '../features/setting/component/setting-side-bar';

export const SettingLayout = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <SettingSideBar />
      <Outlet />
    </div>
  );
};
