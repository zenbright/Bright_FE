import { User, UserCog, SunMoon, Bell} from 'lucide-react';
// import {}

const iconStyle = 'w-4 h-4 mt-[3px] group-hover:text-blue-700'
const SETTING_TABS = [
    {name:"Edit Profile", icon: <User className={iconStyle}/>}, 
    {name:"Account", icon: <UserCog className={iconStyle}/>}, 
    {name:"Appearance", icon: <SunMoon className={iconStyle}/>}, 
    {name:"Notification", icon: <Bell className={iconStyle}/>}
]

export default SETTING_TABS