import React from 'react';
import SettingSideBar from '../features/setting/component/setting-side-bar';
import {Outlet} from 'react-router-dom';

export const SettingLayout = () => {
  return (
    <div className='flex h-screen overflow-hidden'>
      <SettingSideBar/>
      <Outlet />
    </div>
  );
};
