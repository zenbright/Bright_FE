import SETTING_TABS from '../test/data/setting';
import SettingTab from './setting-tab';
import {useState} from 'react';

function SettingSideBar() {
  const [selectedActive, setSelectedActive] = useState(0);
  const handleSelected = (index) => {
    setSelectedActive(index);
  };

  return (
    <div className="h-dvh w-[19vw] bg-slate-100/30 border-r-[1px] border-slate-300 flex flex-col no-scrollbar overflow-auto">
      <div className="text-lg font-boldtop-0 p-2 border-b-[1px] border-slate-300 group w-full">
        {'Setting'}
      </div>

      <div className='px-2'>
        {SETTING_TABS.map((tab, index) => (
          <SettingTab
            key={index}
            tab = {tab}
            tabIndex = {index}
            selectedActive={selectedActive}
            handleSelected={() => handleSelected(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default SettingSideBar;
