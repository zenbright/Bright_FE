// eslint-disable-next-line no-unused-vars
import SettingSideBar from './setting-side-bar';
// eslint-disable-next-line no-unused-vars
import Profile from './profile-page';
// eslint-disable-next-line no-unused-vars
import Account from './account-page';
// eslint-disable-next-line no-unused-vars
import Appearance from './appearance-page';
// eslint-disable-next-line no-unused-vars
import Notification from './notification-page';

import '../styles/font.css';
function SettingPage() {
  return (
    <div className="flex h-dvh ">
      {/* Setting Page Section */}
      <div className='flex h-screen overflow-hidden'>
        <SettingSideBar/>
        {/* <Profile /> */}
        <Account/>
        {/* <Appearance/> */}
        {/* <Notification/> */}
      </div>

    </div>
  );
}

export default SettingPage;
