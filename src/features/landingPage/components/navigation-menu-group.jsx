/* eslint-disable react/prop-types */
import BrightLogo from '@/assets/images/app-logo/dark.svg';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import React from 'react';

import { INTRODUCTION } from '../assets/strings';

export const NavigationMenuGroup = () => {
  const ListItem = React.forwardRef(
    ({ className, title, children, ...props }, ref) => {
      return (
        <li>
          <NavigationMenuLink asChild>
            <a
              ref={ref}
              className={cn(
                'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#F4F4F5] hover:text-[#18181B] focus:bg-[#F4F4F5] focus:text-[#18181B]',
                className
              )}
              {...props}
            >
              <div className="text-sm font-medium leading-none">{title}</div>
              <p className="line-clamp-2 text-sm leading-snug text-[#71717A]">
                {children}
              </p>
            </a>
          </NavigationMenuLink>
        </li>
      );
    }
  );

  ListItem.displayName = 'ListItem';

  return (
    <div className="ml-4 list-none">
      <NavigationMenu>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-bold text-md bg-transparent text-black hover:text-black hover:bg-white focus:bg-white focus:text-black disabled:opacity-50 data-[active]:bg-white/50 data-[state=open]:bg-white/50">
            Getting Started
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-white">
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-[#F4F4F5]/50 to-[#F4F4F5] p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <img
                      src={BrightLogo}
                      className="h-20 w-full mix-blend-multiply"
                      alt="Logo"
                    />

                    <div className="mb-2 mt-4 text-lg font-medium">Bright</div>
                    <p className="text-sm leading-tight text-[#71717A]">
                      {INTRODUCTION.GETTING_STARTED.OVERVIEW}
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem
                href="/docs"
                title="Introduction"
                className="text-black"
              >
                {INTRODUCTION.GETTING_STARTED.INTRODUCTION}
              </ListItem>
              <ListItem
                href="/docs/sponsor"
                title="Sponsor"
                className="text-black"
              >
                {INTRODUCTION.GETTING_STARTED.SPONSOR}
              </ListItem>
              <ListItem
                href="/docs/about"
                title="About us"
                className="text-black"
              >
                {INTRODUCTION.GETTING_STARTED.ABOUT}
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenu>
    </div>
  );
};
