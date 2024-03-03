import React from 'react';
import Sidebar from '../../components/sidebar';
import {Outlet} from 'react-router-dom';

export const AppLayout = () => {
  return (
    <div className='flex'>
      <Sidebar/>
      <Outlet />
    </div>
  );
};
