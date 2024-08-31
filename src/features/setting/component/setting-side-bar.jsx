import { useState } from 'react';

import SETTING_TABS from '../test/data/setting';
import SettingTab from './setting-tab';

function SettingSideBar() {
  const [selectedActive, setSelectedActive] = useState(0);
  const handleSelected = index => {
    setSelectedActive(index);
  };

  return (
    <div className="h-dvh w-[16vw] bg-background flex flex-col no-scrollbar overflow-auto mr-[3vw]">
      <div className="text-2xl font-light top-0 pt-8 pb-[14px] px-2 border-b-[1px] border-slate-300/30 group w-full">
        {'Setting'}
      </div>

      <div className="px-2">
        {SETTING_TABS.map((tab, index) => (
          <SettingTab
            key={index}
            tab={tab}
            tabIndex={index}
            selectedActive={selectedActive}
            handleSelected={() => handleSelected(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default SettingSideBar;
