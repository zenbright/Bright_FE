import SettingSideBar from './setting-side-bar'
import Profile from './profile-page'
import Account from './account-page';
import Appearance from './appearance-page';
import Notification from './notification-page';
import {MESSAGE_TAB_WIDTH, NAV_BAR_WIDTH} from '../../../lib/constants/size.global';

import '../styles/font.css'
function SettingPage() {
    return (
        <div className="flex h-screen container-ns">
            {/* Nav Bar */}
            <div className="h-screen bg-black" style={{width: `${NAV_BAR_WIDTH}`}} />

            {/* Setting Page Section */}
            <div className='flex flex-row h-screen'>
                <SettingSideBar></SettingSideBar>
                {/* <Profile></Profile> */}
                <Account></Account>
                {/* <Appearance></Appearance> */}
                {/* <Notification></Notification> */}
            </div>
            
        </div>
    )
}

export default SettingPage;