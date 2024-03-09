import React from 'react';
import Sidebar from '../components/sidebar';
import {Outlet} from 'react-router-dom';

export const AppLayout = () => {
  return (
    <div className='flex h-dvh'>
      <div className='absolute z-40'>
        <Sidebar className="absolute z-40"/>
      </div>
      <div className='flex ml-[6vw] overflow-auto w-full'>
        <Outlet />
      </div>
    </div>
  );
};
