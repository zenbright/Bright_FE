import DashboardIcon from '../assets/images/dashboard.svg?react';
import NotificationIcon from '../assets/images/notification.svg?react';
import CalendarIcon from '../assets/images/calendar.svg?react';
import MessageIcon from '../assets/images/message.svg?react';
import SettingIcon from '../assets/images/settings.svg?react';
import AboutIcon from '../assets/images/about.svg?react';
import LogoutIcon from '../assets/images/logout.svg?react';
import NavItem from './nav-item.jsx';
import UserImageName from './user-image-name.jsx';
import ProjectDashboard from './project-dashboard.jsx';
import LogoutButton from './button-logout.jsx';
import '../styles/font.css';
import '../styles/sideBarEffect.css';

function Sidebar() {
  return (
    <div className="flex flex-row container-ns">
      <div className="relative group w-[6vw] hover:w-[18vw] group-hover:w-[18vw] transition-all duration-300 bg-white border-r-2 pt-2 h-screen flex flex-col items-center over">
        {/* User Information */}
        <UserImageName text={'Username'} image={''} />

        <div className="line mt-2 mb-3 p-[0.5px] w-[0vw] opacity-0 group-hover:opacity-100 bg-slate-400 overflow-hidden" />

        {/* Navigation Content */}
        <div className="flex flex-col relative w-full h-screen space-y-4">
          <NavItem text={'Dashboard'}>
            {<>
              <DashboardIcon className="w-5 h-5 hover:fill-white"/>
              <div className="grandchild-content hidden absolute left-[18vw] top-[-77px] h-screen">
                <ProjectDashboard />
              </div>
            </>}
          </NavItem>

          <NavItem text={'Notification'}>
            <NotificationIcon className="w-5 h-5 hover:fill-white"/>
          </NavItem>

          <NavItem text={'Schedule'}>
            <CalendarIcon className="w-5 h-5 hover:fill-white"/>
          </NavItem>

          <NavItem text={'Message'}>
            <MessageIcon className="w-5 h-5 hover:fill-white"/>
          </NavItem>

          <NavItem text={'Settings'}>
            <SettingIcon className="w-5 h-5 hover:fill-white"/>
          </NavItem>

          <NavItem text={'About'}>
            <AboutIcon className="w-5 h-5 hover:fill-white"/>
          </NavItem>
        </div>

        {/* Logout button */}
        <div className="w-full pb-1">
          <LogoutButton text={'Logout'}>
            <LogoutIcon className="w-5 h-5 hover:fill-white"/>
          </LogoutButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
