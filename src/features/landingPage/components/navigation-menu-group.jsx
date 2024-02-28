/* eslint-disable react/prop-types */
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import React from 'react';
import {cn} from '@/lib/utils';
import BrightLogo from '@/assets/images/app-logo/dark.svg';

export const NavigationMenuGroup = () => {
  const ListItem = React.forwardRef(
      (
          {className, title, children, ...props},
          ref,
      ) => {
        return (
          <li>
            <NavigationMenuLink asChild>
              <a
                ref={ref}
                className={cn(
                    'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                    className,
                )}
                {...props}
              >
                <div className="text-sm font-medium leading-none">{title}</div>
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  {children}
                </p>
              </a>
            </NavigationMenuLink>
          </li>
        );
      },
  );

  ListItem.displayName = 'ListItem';

  return (
    <div className='ml-4 list-none'>
      <NavigationMenu>
        <NavigationMenuItem>
          <NavigationMenuTrigger className='font-bold text-md bg-transparent'>Getting Started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/" >
                    <img src={BrightLogo} className="h-20 w-full" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Bright
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                     Stop juggling tasks and spreadsheets. Start building success with our project management tools that empower your team to reach its full potential.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introduction">
                All-in-one project management tools made for developers.
              </ListItem>
              <ListItem href="/docs/spnsor" title="Sponsor">
                Become a sponsor and help us improve the application.
              </ListItem>
              <ListItem href="/docs/about" title="About us">
                Connect with the dedicated minds behind this initiative.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenu>
    </div>
  );
};
