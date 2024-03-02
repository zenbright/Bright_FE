import React from 'react';
import {NavigationMenuGroup} from './navigation-menu-group';
import {Button} from '@/components/ui/button';
import BrightLogo from '@/assets/images/app-logo/logomini-dark.svg';

export const Header = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className='sticky top-0 z-50'>
      <div className='flex items-center p-2 pt-6 mb-2 justify-between'>
        <div className='flex items-center h-12 justify-center '>
          <img src={BrightLogo} className='h-full w-full object-cover hover:cursor-pointer ' />

          <NavigationMenuGroup />

          <div className="flex flex-grow justify-end">
            <Button variant='ghost' className='font-bold text-md'> Features </Button>
            <Button variant='ghost' className='font-bold text-md'> Pricing </Button>
            <Button variant='ghost' className='font-bold text-md'> Github </Button>
          </div>
        </div>

        <div className='flex gap-4 mr-12'>
          <Button> Sign in </Button>
          <Button variant='outline' className='border-2 border-black/15'>Contact us</Button>
        </div>
      </div>
    </div>
  );
});

Header.displayName='header';
