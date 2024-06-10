import { Bell, SunMoon, User, UserCog } from 'lucide-react';

const iconStyle = 'w-4 h-4 mt-[3px] group-hover:text-blue-700';

const SETTING_TABS = [
  { name: 'Edit Profile', icon: <User className={iconStyle} />, paragraph: '' },
  { name: 'Account', icon: <UserCog className={iconStyle} />, paragraph: '' },
  {
    name: 'Appearance',
    icon: <SunMoon className={iconStyle} />,
    paragraph: '',
  },
  { name: 'Notification', icon: <Bell className={iconStyle} />, paragraph: '' },
];

export default SETTING_TABS;
