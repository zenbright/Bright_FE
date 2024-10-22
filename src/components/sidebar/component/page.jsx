import { Mail } from 'lucide-react';
import { useState } from 'react';

import DashboardIcon from '../assets/images/dashboard.svg?react';
import LogoutIcon from '../assets/images/logout.svg?react';
import NotificationIcon from '../assets/images/notification.svg?react';
import SettingIcon from '../assets/images/settings.svg?react';
import '../styles/font.css';
import '../styles/sideBarEffect.css';
import LogoutButton from './button-logout.jsx';
import NavItem from './nav-item.jsx';
import ProjectDashboard from './project-dashboard.jsx';
import UserImageName from './user-image-name.jsx';

function Sidebar() {
  const [selectedItem, setSelectedItem] = useState('Dashboard');

  const handleNavClick = text => {
    setSelectedItem(text);
  };

  return (
    <div className="container-ns flex flex-row">
      <div className="transition-al group relative flex h-screen w-[5.5vw] flex-col items-center border-r-2 bg-background pt-2 duration-200 hover:w-[18vw]">
        {/* User Information */}
        <UserImageName text={'Username'} image={''} />

        <div className="line mb-3 mt-2 w-[0vw] overflow-hidden bg-background p-[0.5px] opacity-0 group-hover:opacity-100" />

        {/* Navigation Content */}
        <div className="relative flex h-screen w-full flex-col space-y-4">
          <NavItem
            text={'Dashboard'}
            onClick={handleNavClick}
            select={selectedItem === 'Dashboard'}
          >
            <>
              <DashboardIcon className="h-5 w-5" />
              <div className="grandchild-content absolute left-[18vw] top-[-77px] h-screen">
                <ProjectDashboard />
              </div>
            </>
          </NavItem>

          <NavItem
            text={'Notification'}
            onClick={handleNavClick}
            select={selectedItem === 'Notification'}
          >
            <NotificationIcon className="h-5 w-5" />
          </NavItem>

          <NavItem
            text={'Inbox'}
            onClick={handleNavClick}
            select={selectedItem === 'Inbox'}
          >
            <Mail className="h-5 w-5" strokeWidth={1.3} />
          </NavItem>

          <NavItem
            text={'Settings'}
            onClick={handleNavClick}
            select={selectedItem === 'Settings'}
          >
            <SettingIcon className="h-5 w-5" />
          </NavItem>
        </div>

        {/* Logout button */}
        <div className="w-full pb-1">
          <LogoutButton text={'Logout'}>
            <LogoutIcon className="h-5 w-5" />
          </LogoutButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
