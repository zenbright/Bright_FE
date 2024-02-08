import SettingSideBar from './SettingSideBar'
import Profile from './Profile'
import Account from './Account';
import Appearance from './Appearance';
import Notification from './Notification';
import {MESSAGE_TAB_WIDTH, NAV_BAR_WIDTH} from '../../../lib/constants/size.global';

import '../styles/font.css'
function SettingPage() {
    return (
        <div className="flex h-screen w-screen container-ns">
            {/* Nav Bar */}
            <div className="h-screen bg-black" style={{width: `${NAV_BAR_WIDTH}`}} />

            {/* Setting Page Section */}
            <div className='flex flex-row'>
                <SettingSideBar></SettingSideBar>
                <Profile></Profile>
                {/* <Account></Account> */}
                {/* <Appearance></Appearance> */}
                {/* <Notification></Notification> */}
            </div>
            
        </div>
    )
}

export default SettingPage;