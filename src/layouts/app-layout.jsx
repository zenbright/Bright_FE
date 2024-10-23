import { AppSidebar } from '@/components/sidebar/component/app-sidebar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import React from 'react';
import { Outlet } from 'react-router-dom';

export const AppLayout = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <SidebarProvider
      style={{
        '--sidebar-width': '14rem',
        '--sidebar-width-mobile': '20rem',
      }}
      open={open}
      onOpenChange={setOpen}
    >
      <AppSidebar setOpen={setOpen} />
      <main className='overflow-hidden'>
        <Outlet />
      </main>
    </SidebarProvider>
  );
};
