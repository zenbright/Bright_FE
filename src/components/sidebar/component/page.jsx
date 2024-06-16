import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import AboutIcon from '../assets/images/about.svg?react';
import CalendarIcon from '../assets/images/calendar.svg?react';
import DashboardIcon from '../assets/images/dashboard.svg?react';
import LogoutIcon from '../assets/images/logout.svg?react';
import MessageIcon from '../assets/images/message.svg?react';
import NotificationIcon from '../assets/images/notification.svg?react';
import SettingIcon from '../assets/images/settings.svg?react';
import '../styles/font.css';
import '../styles/sideBarEffect.css';
import LogoutButton from './button-logout.jsx';
import NavItem from './nav-item.jsx';
import ProjectDashboard from './project-dashboard.jsx';
import UserImageName from './user-image-name.jsx';

function Sidebar() {
  const [selectedTab, setSelectedTab] = useState('Dashboard');

  return (
    <div className="flex flex-row container-ns">
      <div className="relative group w-[6vw] hover:w-[18vw] group-hover:w-[18vw] transition-all bg-white pt-2 h-screen flex flex-col items-center border-r-[1.5px]">
        {/* User Information */}
        <UserImageName text={'Username'} image={''} />

        <div className="line mt-2 mb-3 w-[0vw] opacity-0 group-hover:opacity-100 bg-slate-400 overflow-hidden" />

        {/* Navigation Content */}
        <div className="flex flex-col relative w-full h-screen space-y-4">
          <NavItem
            text={'Dashboard'}
            select={selectedTab === 'Dashboard'}
            onClick={setSelectedTab}
          >
            <DashboardIcon className="w-5 h-5 hover:fill-white" />
            <div className="grandchild-content hidden absolute left-[18vw] top-[-77px] h-screen">
              <ProjectDashboard />
            </div>
          </NavItem>

          <NavItem
            text={'Notification'}
            select={selectedTab === 'Notification'}
            onClick={setSelectedTab}
          >
            <NotificationIcon className="w-5 h-5" />
          </NavItem>

          <NavItem
            text={'Schedule'}
            select={selectedTab === 'Schedule'}
            onClick={setSelectedTab}
          >
            <CalendarIcon className="w-5 h-5 " />
          </NavItem>

          <NavItem
            text={'Message'}
            select={selectedTab === 'Message'}
            onClick={setSelectedTab}
          >
            <MessageIcon className="w-5 h-5 " />
          </NavItem>

          <NavItem
            text={'Settings'}
            select={selectedTab === 'Settings'}
            onClick={setSelectedTab}
          >
            <SettingIcon className="w-5 h-5 " />
          </NavItem>

          <NavItem
            text={'About'}
            select={selectedTab === 'About'}
            onClick={setSelectedTab}
          >
            <AboutIcon className="w-5 h-5 " />
          </NavItem>
        </div>

        {/* Logout button */}
        <div className="w-full pb-1">
          <LogoutButton text={'Logout'}>
            <LogoutIcon className="w-5 h-5 " />
          </LogoutButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

Sidebar.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func,
};
