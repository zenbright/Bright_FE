import { useState } from "react"

function SettingTab({tab, tabIndex, selectedActive, handleSelected}) {
    return (
        <div className={`flex flex-col p-3 w-full group cursor-pointer border-slate-300 border-b-[1px] hover:bg-slate-100
                        ${selectedActive === tabIndex ? 'border-r-blue-700 rounded-none border-r-[3px]' : ''}`}
            onClick={handleSelected}
        >
            <div className={`flex flex-row gap-2 
                            ${selectedActive === tabIndex ? 'text-blue-700' : ''}`}
            >
                {tab.icon}
                <h1 className='font-bold text-lg group-hover:text-blue-700'>{tab.name}</h1>
            </div>
            <div className='ml-8'>
                <p>{tab.paragraph}</p>
            </div>
        </div>
    )
}

export default SettingTab