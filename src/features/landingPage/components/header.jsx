import BrightLogo from '@/assets/images/app-logo/logomini-light.svg';
import { Button } from '@/components/ui/button';
import React from 'react';
import { NavLink } from 'react-router-dom';

import { NavigationMenuGroup } from './navigation-menu-group';

export const Header = React.forwardRef((_, ref) => {
  return (
    <div ref={ref} className="sticky top-0 z-50 ">
      <div className="flex items-center p-2 pt-6 mb-2 justify-between">
        <div className="flex items-center h-12 justify-center ">
          <img
            src={BrightLogo}
            className="h-full w-full object-cover hover:cursor-pointer "
          />

          <NavigationMenuGroup />

          <div className="flex flex-grow justify-end">
            <Button
              variant="ghost"
              className="font-bold text-md text-black hover:bg-white hover:text-black"
            >
              {' '}
              Features{' '}
            </Button>
            <Button
              variant="ghost"
              className="font-bold text-md text-black hover:bg-white hover:text-black"
            >
              {' '}
              Pricing{' '}
            </Button>
            <Button
              variant="ghost"
              className="font-bold text-md text-black hover:bg-white hover:text-black"
            >
              {' '}
              Github{' '}
            </Button>
          </div>
        </div>

        <div className="flex gap-4 mr-12">
          <NavLink to={'/auth'}>
            <Button className="bg-black text-white hover:bg-gray-800">
              {' '}
              Sign in{' '}
            </Button>
          </NavLink>
          <Button
            variant="outline"
            className="bg-white text-black hover:bg-gray-100 hover:text-black border-2 border-black/15"
          >
            Contact us
          </Button>
        </div>
      </div>
    </div>
  );
});

Header.displayName = 'header';
