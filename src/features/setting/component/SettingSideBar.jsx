import { User, UserCog  } from 'lucide-react';
import SETTING_TABS from "../test/data/setting";
import SettingTab from './SettingTab'
import { useState } from 'react';
function SettingSideBar() {
    const [selectedActive, setSelectedActive] = useState(0)
    const handleSelected = (index) => {
        setSelectedActive(index)
    }
    return (
        <div className="h-screen w-[19vw] bg-slate-100/30 border-r-[1px] border-slate-300 flex flex-col no-scrollbar">
            <div className="text-lg font-bold top-0 p-2 border-b-[1px] border-slate-300 group w-full"> Setting</div>
            <div>
                {SETTING_TABS.map((tab, index) => (
                    <SettingTab
                        tab = {tab}
                        tabIndex = {index}
                        selectedActive={selectedActive}
                        handleSelected={() => handleSelected(index)}
                        paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                    />    
                ))}
            </div>
        </div>
    )
}

export default SettingSideBar