import { User, UserCog, SunMoon, Bell} from 'lucide-react';
// import {}

const iconStyle = 'w-5 h-5 mt-[3px] group-hover:text-blue-700'
const SETTING_TABS = [
    {name:"Edit Profile", icon: <User className={iconStyle}/>, paragraph: ''}, 
    {name:"Account", icon: <UserCog className={iconStyle}/>, paragraph: ''}, 
    {name:"Appearance", icon: <SunMoon className={iconStyle}/>, paragraph: ''}, 
    {name:"Notification", icon: <Bell className={iconStyle}/>, paragraph: ''}
]

export default SETTING_TABS