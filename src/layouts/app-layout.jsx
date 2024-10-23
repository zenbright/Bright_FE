import { AppSidebar } from '@/components/sidebar/component/app-sidebar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import React from 'react';
import { Outlet } from 'react-router-dom';

import Sidebar from '../components/sidebar';

export const AppLayout = () => {
  return (
    <SidebarProvider
      style={{
        '--sidebar-width': '14rem',
        '--sidebar-width-mobile': '20rem',
      }}
    >
      <AppSidebar />
      <main>
        <SidebarTrigger />
        <Outlet />
      </main>
    </SidebarProvider>
  );
};
