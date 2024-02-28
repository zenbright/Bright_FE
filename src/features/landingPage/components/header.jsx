import React from 'react';

import {NavigationMenuGroup} from './navigation-menu-group';
import BrightLogo from '@/assets/images/app-logo/logomini-dark.svg';
import {Button} from '@/components/ui/button';

export const Header = () => {
  return (
    <div className='flex items-center m-2 mt-6 mb-2 justify-between'>
      <div className='flex items-center h-12 justify-center '>
        <img src={BrightLogo} className='h-full w-full object-cover hover:cursor-pointer mb-2' />
        <NavigationMenuGroup />
        <div className="flex flex-grow justify-end">
          <Button variant='ghost' className='font-bold text-md'> Features </Button>
          <Button variant='ghost' className='font-bold text-md'> Pricing </Button>
          <Button variant='ghost' className='font-bold text-md'> Github </Button>
        </div>
      </div>

      <div className='flex gap-4 mr-12'>
        <Button> Login </Button>
        <Button variant='outline' className='border-2 border-black/15'>SignUp</Button>
      </div>
    </div>
  );
};
