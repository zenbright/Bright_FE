import SettingSideBar from './setting-side-bar'
import Profile from './profile-page'
import Account from './account-page';
import Appearance from './appearance-page';
import Notification from './notification-page';
import { MESSAGE_TAB_WIDTH, NAV_BAR_WIDTH } from '../../../lib/constants/size.global';

import '../styles/font.css'
function SettingPage() {
    return (
        <div className="flex h-dvh ">
            {/* Nav Bar */}
            <div className="h-dvh bg-black" style={{ width: `${NAV_BAR_WIDTH}` }} />

            {/* Setting Page Section */}
            <div className='flex h-screen overflow-hidden'>
                {/* <SettingSideBar /> */}
                <Profile />
                {/* <Account></Account> */}
                {/* <Appearance></Appearance> */}
                {/* <Notification></Notification> */}
            </div>

        </div>
    )
}

export default SettingPage;